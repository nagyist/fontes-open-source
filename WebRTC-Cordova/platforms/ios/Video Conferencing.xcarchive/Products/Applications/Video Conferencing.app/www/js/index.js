var app = {
    initialize: function() {
        console.error = window.onerror = function() {
            if (JSON.stringify(arguments).indexOf('iosrtc') !== -1) {
                return;
            }

            if (JSON.stringify(arguments).indexOf('No Content-Security-Policy') !== -1) {
                return;
            }

            if (JSON.stringify(arguments).indexOf('<') !== -1) {
                return;
            }

            alert(JSON.stringify(arguments, null, ' '));
        };

        app.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
        document.addEventListener('resume', function() {
            if (window.connection && connection.getAllParticipants().length) {
                return;
            }
            location.reload();
        }, false);

        document.addEventListener('online', function() {
            location.reload();
        }, false);

        document.addEventListener('offline', function() {
            alert('Seems disconnected.');
        }, false);
    },
    onDeviceReady: function() {
        // initializing the constructor
        var connection = new RTCMultiConnection();

        // comment-out below line if you do not have your own socket.io server
        connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

        connection.socketMessageEvent = 'video-conference-demo';

        // setting type of media connection
        connection.session = {
            audio: true,
            video: true
        };

        // DOM objects
        var localVideo = document.getElementById('localVideo');
        var miniVideo = document.getElementById('miniVideo');
        var remoteVideo = document.getElementById('remoteVideo');
        var card = document.getElementById('card');
        var containerDiv;

        var main = document.querySelector('#main');
        var smaller = document.querySelector('#smaller');

        var attachMediaStream = function(element, stream) {
            element.src = URL.createObjectURL(stream);
        };

        var reattachMediaStream = function(to, from) {
            to.src = from.src;
        };

        // onstream event; fired both for local and remote videos
        var numberOfRemoteVideos = 0;
        connection.onstream = function(e) {
            if (e.type == 'local') {
                localStream = e.stream;
                attachMediaStream(localVideo, e.stream);
                localVideo.muted = true;
                localVideo.style.opacity = 1;
            }

            if (e.type == 'remote') numberOfRemoteVideos++;

            if (e.type == 'remote' && numberOfRemoteVideos == 1) {
                remoteStream = e.stream;
                reattachMediaStream(miniVideo, localVideo);
                miniVideo.muted = true;
                attachMediaStream(remoteVideo, e.stream);
                waitForRemoteVideo();

                remoteVideo.setAttribute('data-id', e.userid);
                miniVideo.setAttribute('data-id', connection.userid);
            }

            if (e.type == 'remote' && numberOfRemoteVideos == 2) {
                appendVideo(e, 'opacity: 1;position: fixed;bottom: 0;z-index: 1;width: 32%;');
            }

            if (e.type == 'remote' && numberOfRemoteVideos == 3) {
                appendVideo(e, 'opacity: 1;position: fixed;top: 0;z-index: 1;width: 32%;');
            }

            if (e.type == 'remote' && numberOfRemoteVideos == 4) {
                appendVideo(e, 'opacity: 1;position: fixed;top: 0;z-index: 1;width: 32%;right:0;');
            }

            if (e.type == 'local') {
                document.getElementById('btn-leave-room').style.display = 'block';
            }
        };

        function appendVideo(e, style) {
            createVideoContainer(e, style, function(div) {
                var video = document.createElement('video');
                video.className = 'other-videos';
                video.setAttribute('style', 'height:auto;opacity:1;');
                video.id = e.userid;
                video.src = URL.createObjectURL(e.stream);
                var remote = document.getElementById('remote');
                div.appendChild(video);
                video.play();
            });
        }

        function createVideoContainer(e, style, callback) {
            var div = document.createElement('div');
            div.setAttribute('style', style || 'float:left;opacity: 1;width: 32%;');
            remote.insertBefore(div, remote.firstChild);
            if (callback) callback(div);
        }

        // if user left
        connection.onleave = function(e) {
            var video = document.getElementById(e.userid);

            if (numberOfRemoteVideos == 1) {
                transitionToWaiting();
            } else if (video && video.parentNode && video.parentNode.parentNode) {
                numberOfRemoteVideos--;
                video.parentNode.parentNode.removeChild(video.parentNode);
            }
        };

        function waitForRemoteVideo() {
            // Call the getVideoTracks method via adapter.js.
            var videoTracks = remoteStream.getVideoTracks();
            if (videoTracks.length === 0 || remoteVideo.currentTime > 0) {
                transitionToActive();
            } else {
                setTimeout(waitForRemoteVideo, 100);
            }
        }

        function transitionToActive() {
            remoteVideo.style.opacity = 1;
            card.style.webkitTransform = 'rotateY(180deg)';
            setTimeout(function() {
                localVideo.src = '';
            }, 500);
            setTimeout(function() {
                miniVideo.style.opacity = 1;
            }, 1000);
            // Reset window display according to the aspectRatio of remote video.
            window.onresize();
        }

        function transitionToWaiting() {
            card.style.webkitTransform = 'rotateY(0deg)';
            setTimeout(function() {
                localVideo.src = miniVideo.src;
                localVideo.muted = true;
                miniVideo.src = '';
                remoteVideo.src = '';

                localVideo.style.opacity = 1;
            }, 500);
            miniVideo.style.opacity = 0;
            remoteVideo.style.opacity = 0;
        }


        // Set the video displaying in the center of window.
        window.onresize = window.onorientationchange = function() {
            var aspectRatio;
            if (remoteVideo.style.opacity === '1') {
                aspectRatio = remoteVideo.videoWidth / remoteVideo.videoHeight;
            } else if (localVideo.style.opacity === '1') {
                aspectRatio = localVideo.videoWidth / localVideo.videoHeight;
            } else {
                return;
            }

            var innerHeight = this.innerHeight;
            var innerWidth = this.innerWidth;
            var videoWidth = innerWidth < aspectRatio * window.innerHeight ?
                innerWidth : aspectRatio * window.innerHeight;
            var videoHeight = innerHeight < window.innerWidth / aspectRatio ?
                innerHeight : window.innerWidth / aspectRatio;
            containerDiv = document.getElementById('container');
            containerDiv.style.width = videoWidth + 'px';
            containerDiv.style.height = videoHeight + 'px';
            containerDiv.style.left = (innerWidth - videoWidth) / 2 + 'px';
            containerDiv.style.top = (innerHeight - videoHeight) / 2 + 'px';
        };

        connection.processSdp = function(sdp) {
            return sdp;
        };

        connection.onMediaError = function(error, constraints) {
            navigator.notification.alert(error.toString() + '\n\nPlease make sure to enable camera and microphone permissions.', null, 'Unable to Capture Camera or Mic', 'OK');
        };

        if(localStorage.getItem('room-id') && localStorage.getItem('room-id').length) {
            connection.sessionid = localStorage.getItem('room-id');
        }
        else {
            connection.sessionid = connection.userid;
        }

        navigator.notification.prompt('Please enter unique room-id:', function(results) {
            if(!results.input1 || !results.input1.length) {
                connection.sessionid = connection.userid;

                navigator.notification.alert('Your room-id is: ' + connection.sessionid, null, 'Random Room-ID', 'OK');
            }

            connection.sessionid = results.input1;

            connection.openOrJoin(connection.sessionid, function() {
                localStorage.setItem('room-id', connection.sessionid);
            });
        }, 'Join A Room', ['Join Room'], connection.sessionid);

        document.querySelector('#btn-leave-room').onclick = function() {
            this.disabled = true;

            if(connection && connection.attachStreams) {
                try {
                    connection.attachStreams.forEach(function(stream) {
                        stream.stop();
                    });
                    
                    connection.close();
                    connection.closeSocket();
                }
                catch(e){}

                connection = null;
            }

            if(navigator.app && navigator.app.exitApp) {
                navigator.app.exitApp();
            }
            else if(navigator.device && navigator.device.exitApp) {
                navigator.device.exitApp();
            }
            else {
                (document.body || document.documentElement).innerHTML = '<h1 style="color:yellow;">Please manually close this app.</h1>';
                window.close();
            }
        };
    }
};

app.initialize();
