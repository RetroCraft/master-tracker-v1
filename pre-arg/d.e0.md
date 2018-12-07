# D.E0: theorist gateway

During the Merch Mystery hunt, the domain [http://thetheoristgateway.com](http://thetheoristgateway.com/) was used as a final step of that ARG. Returning to the URL as of 09/16 gives a static page with &lt;title&gt; "hellointernet" and a &lt;meta&gt; description of "return on the date which is hidden".

The content of the page is made up of an image [fefefe.png](http://thetheoristgateway.com/fefefe.png) \(762x762 pixels\) and some JavaScript tracking code \(**which will have no bearing on the ARG as it is just standard boilerplate!**\).

The image is a message written in Montserrat Light with a l33t-style steganographic cipher. By taking each substituted letter, the numeric string `524742323534` is discovered. This, when fed through an ASCII hex conversion, results in `RGB254`. The RGB color \(254, 254, 254\) is one pixel darker than pure white \(which is three 255's\).The filename, FEFEFE, is also standard hexadecimal for the same RGB color. Filtering for that color in the white background reveals a timestamp \(literally, it uses a stamped typewriter-style font\) for 9.29.2018 at 00:00:01 PST \(one second after midnight\). Accessing the EXIF data of the file will show that it was created in Photoshop.

At the timestamp, the website updated. It is now a black background, with the following image on it, called `patienceisthekey6974736a75737461636c6f636b6775797372656c6178.gif`. The numbers are an ASCII hex representation of “itsjustaclockguysrelax”.

The minutes counter also flashes in a semi-regular fashion, two blips followed by one blip. This could represent Morse `..-` for "IT" or “U”. The blips take place when on frames 1, 3, 7, and 11.

![Countdown gif](../../assets/pre.d.e0.countdown.gif)

A frame by frame analysis revealed these numbers, separated into frames:

1. 9 3 2 0
2. 5 0 7 1
3. 5/1 4 6/7 4
4. 8 2 2 5/4
5. 0 8/7 1 3
6. 6 5 3 6
7. 1 2 4 5
8. 9/1 8/2 7 6/5
9. 8 7 6 5
10. 4 3 2 1
11. 0/4 0/3 0/2 0/1

The following is a compilation of the eleven frames \(left-to-right, top-to-bottom\):

![(../../assets/pre.d.e0.countdown/01.png)![(../../assets/pre.d.e0.countdown/02.png)![(../../assets/pre.d.e0.countdown/03.png)![(../../assets/pre.d.e0.countdown/04.png)![(../../assets/pre.d.e0.countdown/05.png)![(../../assets/pre.d.e0.countdown/06.png)![(../../assets/pre.d.e0.countdown/07.png)![(../../assets/pre.d.e0.countdown/08.png)![(../../assets/pre.d.e0.countdown/09.png)![(../../assets/pre.d.e0.countdown/10.png)![(../../assets/pre.d.e0.countdown/11.png)
