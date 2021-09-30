# Snowboard Tools

Playing around with creating some online tools in react.

This is starting to come from [https://github.com/rileybathurst/board-size](https://github.com/rileybathurst/board-size) and this [https://github.com/rileybathurst/snowboard-size](https://github.com/rileybathurst/snowboard-size)

I don't know where I had all the math best sorted
boardsize is newer but I'm not sure if thats the thing
lets try and hope it is
seems like more of a second title??? soo?

base math so it's here in clean english?

I'm going to work in metric first then convert everything to imperial as its smarter
so all this is written in metric
it also outputs in cm which is key.

## height

this is key
times by 0.885 is board size
Start the height at 175cm
that starts the board guess at 155cm

## weight

Guess the weight at 0.4*the height
any difference in weight is*0.3
70kg is the guess
so droping the weight by 10kg is a 3cm difference in board size

## mountain size

math is litterally plus and minus 1cm at the moment that can be way better

## final size

(height*0.885) + weightOffset + (mountain* 1)
then rounded to cm.
