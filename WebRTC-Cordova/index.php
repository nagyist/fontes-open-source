<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="google-site-verification" content="zhJ273gZGLJ_Cbl-muzPYYTR6jD7sCCgufDIRS5h4SE" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="keywords" content="RTCMultiConnection,JavaScript,WebRTC,Demos,Experiments,Samples,Examples" />
    <link rel="stylesheet" href="https://cdn.webrtc-experiment.com/style.css">

    <title>Video Conferencing Cordova App (iOS+Android) using RTCMultiConnection</title>

    <style>
      p {
          margin-top: 0!important;
          margin-bottom: 0!important;
          padding: 10px 10px!important;
        }

        blockquote {
          margin: 10px;
          border-radius: 10px;
          background: rgb(253, 253, 253);
          padding: 8px 20px;
          font-size: 25px;
          font-weight: 200;
          line-height: 1.5;
          word-spacing: 5px;
        }

        section blockquote {
          color: #EC008C;
        }

        h2, h1 {
          font-size: 35px;
          font-weight: 200;
          padding: 5px 10px;
          border-bottom: 1px dotted #EC008C;
        }

        li, li a, p a {
          font-weight: 200;
          line-height: 1.5;
          word-spacing: 5px;
        }

        h2 a {
          color: #EC008C;
        }

        h1 {
          font-size: 40px;
          color: #EC008C;
        }

        pre {
          border-left: 0;
          padding-left: 0;
        }
    </style>
</head>

<body>
    <article>
        <header style="text-align: center;">
            <h1>
                Video Conferencing Cordova App (iOS+Android)
            </h1>
            <p class="skip-links">
                <a href="/cordova-apps/">HOME</a>
                <span> &copy; </span>
                <a href="http://www.MuazKhan.com/" target="_blank">Muaz Khan</a> .
                <a href="http://twitter.com/WebRTCWeb" target="_blank" title="Twitter profile for WebRTC Experiments">@WebRTCWeb</a> .
                <a href="https://github.com/muaz-khan?tab=repositories" target="_blank" title="Github Profile">Github</a> .
                <a href="https://github.com/muaz-khan/RTCMultiConnection/issues?state=open" target="_blank">Latest issues</a> .
                <a href="https://github.com/muaz-khan/RTCMultiConnection/commits/master" target="_blank">What's New?</a>
            </p>
        </header>

        <div class="github-stargazers skip-links"></div>

        <blockquote class="skip-links">
          Live Demo: <a id="demo" href="https://rtcmulticonnection.herokuapp.com/demos/Video-Conferencing.html">demos/Video-Conferencing.html</a>

          <br><br>
          Google Play Store Link: <a href="https://play.google.com/store/apps/details?id=rmc3.videoconference">https://play.google.com/store/apps/details?id=rmc3.videoconference</a>
        </blockquote>

        <section class="experiment">
            <small style="float:right;color:red;">Updated at: <time><?php echo date("F d, Y", filemtime("Download-Source.zip"));?></time></small>

            <h2 class="skip-links"><a id="download" href="#download">Download Source</a></h2>
            <ol>
              <li><a id="Download-Source.zip" href="Download-Source.zip">Download-Source.zip</a></li>
              <li><a id="Install-Android-App.apk" href="Install-Android-App.apk">Install-Android-App.apk</a> (or <span class="skip-links"><a href="https://play.google.com/store/apps/details?id=rmc3.videoconference">install on Google Play Store</a></span>)</li>
            </ol>
        </section>

        <section class="experiment">
            <h2 class="skip-links"><a id="source" href="#source">View Codes Online</a></h2>
            <ol>
              <li><a id="config.xml" href="config.xml">config.xml</a></li>
              <li><a id="index.html" href="www/index.html">www/index.html</a></li>
              <li><a id="index.js" href="www/js/index.js">www/js/index.js</a> (main file)</li>
              <li><a id="RTCMultiConnection.js" href="www/js/RTCMultiConnection.js">www/js/RTCMultiConnection.js</a></li>
              <li><a id="AndroidManifest.xml" href="platforms/android/AndroidManifest.xml">platforms/android/AndroidManifest.xml</a></li>
              <li><a id="iosrtc-swift-support.js" href="hooks/iosrtc-swift-support.js">hooks/iosrtc-swift-support.js</a></li>
            </ol>
        </section>

        <section class="experiment">
            <h2 class="skip-links"><a id="help" href="#help">Help Files</a></h2>
            <ol>
              <li><a id="how-to-deploy-on-Google-Android-Store.txt" href="how-to-deploy-on-Google-Android-Store.txt">how-to-deploy-on-Google-Android-Store.txt</a></li>
              <li><a id="how-to-test.txt" href="how-to-test.txt">how-to-test.txt</a></li>
              <li><a id="how-to-modify-codes.txt" href="how-to-modify-codes.txt">how-to-modify-codes.txt</a></li>
              <li><a id="requirements.txt" href="requirements.txt">requirements.txt</a></li>
              <li><a id="issues-bugs-discussion-query.txt" href="issues-bugs-discussion-query.txt">issues-bugs-discussion-query.txt</a></li>
            </ol>
        </section>

        <section class="experiment">
            <h2 class="skip-links"><a id="tutorials" href="#tutorials">Tutorials</a></h2>
            <ol>
              <li class="skip-links"><a href="http://www.rtcmulticonnection.org/docs/Write-iOS-Apps/">Write iOS apps using RTCMultiConnection</a></li>
              <li class="skip-links"><a href="http://www.rtcmulticonnection.org/docs/Write-Android-Apps/">Write Android apps using RTCMultiConnection</a></li>
              <li class="skip-links"><a href="https://github.com/muaz-khan/RTCMultiConnection/blob/master/docs/ios-android.md">https://github.com/muaz-khan/RTCMultiConnection/blob/master/docs/ios-android.md</a></li>
            </ol>
        </section>

        <section class="experiment own-widgets latest-commits">
            <h2 class="header" id="updates" style="color: red;padding-bottom: .1em;"><a href="https://github.com/muaz-khan/RTCMultiConnection/commits/master">Latest Updates</a></h2>
            <div id="github-commits"></div>
        </section>

        <section class="experiment own-widgets">
            <h2 class="header" id="updates" style="color: red;padding-bottom: .1em;"><a href="https://github.com/muaz-khan/RTCMultiConnection/issues">Latest Issues</a></h2>
            <div id="github-issues"></div>
        </section>

        <section class="experiment">
            <h2 class="header" id="feedback">Feedback</h2>
            <div>
                <textarea id="message" style="height: 8em; margin: .2em; width: 98%; border: 1px solid rgb(189, 189, 189); outline: none; resize: vertical;" placeholder="Have any message? Suggestions or something went wrong?"></textarea>
            </div>
            <button id="send-message" style="font-size: 1em;">Send Message</button><small style="margin-left:1em;">Enter your email too; if you want "direct" reply!</small>
        </section>

        <a href="https://github.com/muaz-khan/RTCMultiConnection" class="fork-left"></a>
    </article>

    <footer>
        <p class="skip-links">
            <a href="https://www.webrtc-experiment.com">WebRTC Experiments</a> © <a href="https://plus.google.com/+MuazKhan" rel="author" target="_blank">Muaz Khan</a>
            <a href="mailto:muazkh@gmail.com" target="_blank">muazkh@gmail.com</a>
            <a href="https://github.com/muaz-khan" target="_blank">Github</a>
        </p>
    </footer>

    <script>
        window.useThisGithubPath = 'muaz-khan/RTCMultiConnection';
    </script>
    <script src="https://cdn.webrtc-experiment.com/commits.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script>
    $('a').click(function(e) {
        var parent = $(this).parent();

        if($(parent).hasClass('skip-links')) {
          return;
        }

        if(this.id == 'demo') {
          return;
        }

        var url = $(this).attr('href');

        if (url.indexOf('.zip') != -1 || url.indexOf('.apk') != -1) {
            return;
        }

        if(url.split('/').pop().indexOf('.') == -1) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        $(parent).html('Loading. Please wait..');

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            xhrFields: {
                withCredentials: true
            }
        }).always(function(r) {
          var preStart = '<pre class="sh_javascript">';
          if(url.indexOf('.html') !== -1 || url.indexOf('.xml') !== -1) {
            preStart = '<pre class="sh_html">';
          }
          $(parent).html(preStart + r.responseText.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>').slideDown('slow');
          sh_highlightDocument();
        });
    });

    if(location.hash.length > 1) {
      var hash = location.hash.replace('#', '');
      if(hash.length && document.getElementById(hash)) {
        var a = document.getElementById(hash);
        $('html, body').animate({
            scrollTop: $(a).offset().top
        }, 2000);
        $(a).click();
      }
    }
    </script>

    <script src="https://cdn.webrtc-experiment.com/syntax/sh_main.min.js" type="text/javascript"> </script>
    <script src="https://cdn.webrtc-experiment.com/syntax/sh_javascript.min.js" type="text/javascript"> </script>
    <script src="https://cdn.webrtc-experiment.com/syntax/sh_html.min.js" type="text/javascript"> </script>
    <link href="https://cdn.webrtc-experiment.com/syntax/sh_style.css" type="text/css" rel="stylesheet">
</body>

</html>
