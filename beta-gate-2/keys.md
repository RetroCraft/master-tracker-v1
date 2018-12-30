# Keys

On 12/28, the second (out of three) beta gate opened which displayed 3 keys to be solved.

### **1: no crash ftw**

For this first key, a picture was provided that said "watch this video:" and then had a YouTube video link. Theorists found that they did not have to watch the video, but instead turn up the exposure to reveal a message around the corners that had a message that stated you did not have to actually watch the video. At the bottom left corner, it stated that your password is "NO CRASH FTW".

![NO CRASH Clue](https://www.thetheoristgateway.com/static/clues/0781fa1e-a275-5b67-87ba-03c2c711b93d/2/BetaGate2_Key1_Clue_HyKwIEkVVxk4AaIsCtyFIpe9mNCuaV7TiJaX3ud1.png)

### **2: marioriomaoooo**

For the second key, TheTheoristGateway took you back to the "youareprepared" video and gave you a legend to decipher the blinking lights at the beginning of the video. Theorists quickly decyphered this and found this to be the answer when going frame by frame using the legend.

![youareprepared legend](https://www.thetheoristgateway.com/static/clues/0781fa1e-a275-5b67-87ba-03c2c711b93d/2/BetaGate2_Key2_Clue_VhP2VtrY18hcTvfOFu88GSSYcvOxJOFhqzgmkpKi.png)

[Video](https://www.youtube.com/watch?v=CPyz8IJTgqE) where the key is used from 0:05 to 0:10.

### **3: 756e627265616b61626c65**

This one stumped a lot of people. Theorists were orignally given a [video](https://www.youtube.com/embed/khob-OhfhhI?rel=0&modestbranding=1) that showed the text "leave. no. stone. unturned." and then flashing green lines under letters. Theorists found that, by following the order of letters being underlined, "unturnnostone" was spelled out. Upon examining the spectrogram of the video's audio, ".com" was located, leading theorists to visit <https://www.unturnnostone.com/>. There, theorists were greeted with a link that had color coded question marks as an extension. Clicking on it brought you to a [page](https://www.unturnnostone.com/themissingtones.html) with 7 rows of alienese stones, each having a colored question mark on their right. Under all the rows, an 8th image was faintly visible hinting for it to be opened in a text editor. When opened, the following paragraph could be seen:

```
thefirststone:
Add two starting from A
thesecondstone:
Subtract 3 starting from Z
thethirdstone:
A +1  +2  +3  +4  +5  +6
thefourthstone:
Skip two letters starting from AB
thefifthstone:
Start with ZA. Subtract a letter and add a letter<br> respectively in pairs.
thesixthstone:
77+66+55+44+33+22+11

the seventh stone.
Stuck eh? Here's a hint: Addition is all you need.
```

Using this, theorists were able to manipulate each row of stones in order to obtain a new string of text.

**The first stone:** Translating this stone to text gave "a c e g i k". A Caesar cipher was then used in order to "add two" as the paragraph above said, transforming the text into "c e g i k m". It was clear here that most of the letters were repeated and could be discarded except for "m".<br>
**The second stone:** Stone translated into "z w t q n k". Similar to the previous stone, a Caesar cipher was used but this time rotating the letters by -3, transforming the text into "w t q n k h". Once again, the pattern could be seen and "h" was left over. <br>
**The third stone:** Stone translated was "a b d g k p". Once again using a Caesar cipher, but instead this time incrementing by 1 for each following letter, transformed the text into "b d g k p v". "v" was the only letter left over after discarding the repeats. <br>
**The fourth stone:** Stones translated into "ab ef ij mn qr uv". Following the guide to "skip two letters," the cipher for this stone was found to be another Caesar cipher with a +4 rotation. "ef ij mn qr uv yz" was the new result, leaving only "yz" after deleting the repeats.<br>
**The fifth stone:** Stone translated into "za yb xc wd ve uf". Yest another Caesar cipher was used, but this time shifting the first letter of each pair down 1 and the second letter up 1. This yielded "yb xc wd ve uf tg" and the result of "tg" after deleting repeated pairs.<br>
**The sixth stone:** Stone translated to "77 143 198 242 275 297". One could arrive at the pattern by subtracting each number by the one before it, or they could simply add 77+66+55+44+33+22+11 like the guide said, which returned "308".<br>
**The seventh stone:** Stone translated to "34 41 46 56 67 80". The pattern here was found by adding the two individual digits in each pair together and then adding it to the pair value itself. The result of doing so was "41 46 56 67 80 88" and upon deleting repeats was left with just "88".<br>

Combining these new strings together in the order specified on the original page of the website created a new string of "MHVYZTG30888", but plugging it in did not work. Theorists THEN found that it had to be lowercase to get to the correct place.
(Sidenote: Normally, websites that are run on WINDOWS have case INsensitive links, but if nothing else is set on other hosts, it will have to be case sensitive. Confirmation from CreatorINK is still awaiting on if this was on purpose)

After going to the website provided (https://www.unturnnostone.com/mhvyztg30888.gif), you got a lot more glyphs, but this time it stated that the password was "unbreakable". This did not fit into the key input, but translating this to HEX (as the morse code of the blinking bottom stones said), you found that it led to "756e627265616b61626c65" which fit into the key input successfully and let theorists pass the finish line.

*That was a lot for BETA GATE 2*
