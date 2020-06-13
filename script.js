var quotes = [
	'\"Never be limited by other people’s limited imaginations.\"', // 1
	'\"I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality…. I believe that unarmed truth and unconditional love will have the final word.\"',  // 2
	'\"In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.\"', // 3
	'\"Hate is too great a burden to bear. It injures the hater more than it injures the hated.\"',  // 4
	'\"Whatever we believe about ourselves and our ability comes true for us.\"',  // 5
	'\"Defining myself, as opposed to being defined by others, is one of the most difficult challenges I face.\"',  // 6
	'\"My humanity is bound up in yours, for we can only be human together.\"',  // 7
	'\"The time is always right to do what is right.\"',  // 8
	'\"Have a vision. Be demanding.\"',  // 9
	'\"We all have dreams. In order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline and effort.\"',  // 10
	'\"I have learned over the years that when one’s mind is made up, this diminishes fear;knowing what must be done does away with fear.\"',  // 11
	'\"Just don’t give up what you’re trying to do. Where there is love and inspiration, I don’t think you can go wrong.\"',  // 12
	'\"If we accept and acquiesce in the face of discrimination, we accept the responsibility ourselves and allow those responsible to salve their conscience by believing that they have our acceptance and concurrence. We should, therefore, protest openly everything… that smacks of discrimination or slander.\"',  // 13
	'\"Wherever there is a human being, I see God-given rights inherent in that being, whatever may be the sex or complexion.\"',  // 14
	'\"We have learned to fly the air like birds and swim the sea like fish, but we have not learned the simple art of living together as brothers. Our abundance has brought us neither peace of mind nor serenity of spirit.\"',  // 15
	'\"He who is not courageous enough to take risks will accomplish nothing in life.\"', // 16
	'\"For to be free is not merely to cast off one’s chains, but to live in a way that respects and enhances the freedom of others.\"',  // 17
	'\"The need for change bulldozed a road down the center of my mind.\"', // 18
	'\"Truth is powerful and it prevails.\"', // 19
	'\"Hold on to your dreams of a better life and stay committed to striving to realize it.\"', // 20
	'\"Have a vision of excellence, a dream of success, and work like hell.\"', // 21
	'\"I had no idea that history was being made.  I was just tired of giving up.\"', // 22
	'\"Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.\"', // 23
	'\"I am lucky that whatever fear I have inside me, my desire to win is always stronger.\"', // 24
	'\"Dreams are lovely but they are just dreams. Fleeting, ephemeral, pretty. But dreams do not come true just because you dream them. It’s hard work that makes things happen. It’s hard work that creates change.\"', // 25
	'\"Life is not a spectator sport. If you’re going to spend your whole life in the grandstand just watching what goes on, in my opinion you’re wasting your life.\"', // 26
	'\"Do the best you can until you know better. Then when you know better, do better.\"',// 27
	'\"Don’t agonize, organize.\"',// 28
	'\"The most common way people give up their power is by thinking they don’t have any.\"', // 29
	'\"You are your best thing.\"', // 30
	'\"Even if it makes others uncomfortable, I will love who I am.\"', // 31
	'\"If everything was perfect, you would never learn and you would never grow.\"', // 32
	'\"I had to make my own living and my own opportunity. But I made it! Don’t sit down and wait for the opportunities to come. Get up and make them.\"', // 33
	'\"Never underestimate the power of dreams and the influence of the human spirit. We are all the same in this notion: The potential for greatness lives within each of us.\"', // 34
	'\"A good head and a good heart are always a formidable combination.\"', // 35
	'\"One of the hardest things in life is having words in your heart that you can’t utter.\"', // 36
	'\"The price of hating other human beings is loving oneself less.\"', // 37
	'\"Instead of looking at the past, I put myself ahead twenty years and try to look at what I need to do now in order to get there then.\"', // 38
	'\"I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.\"', // 39
	'\"If I didn’t define myself for myself, I would be crunched into other people’s fantasies for me and eaten alive.\"', // 40
	'\"I used to want the words ‘She tried’ on my tombstone. Now I want ‘She did it.’\"', // 41
	'\"Everything will change. The only question is growing up or decaying.\"', // 42
	'\"There is never time in the future in which we will work out our salvation. The challenge is in the moment; the time is always now.\"', // 43
	'\"You don’t have to be one of those people that accepts things as they are. Every day, take responsibility for changing them right where you are.\"', // 44
	'\"If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.\"', // 45
	'\"No person is your friend who demands your silence, or denies your right to grow.\"', // 46
	'\"If you are fortunate to have opportunity, it is your duty to make sure other people have those opportunities as well.\"', // 47
	'\"You never know how or when you’ll have an impact, or how important your example can be to someone else.\"', // 48
	'\"You never know which experiences of life are going to be of value . . . You’ve got to leave yourself open to the hidden opportunities.\"', // 49
	'\"There’s always something to suggest that you’ll never be who you wanted to be. Your choice is to take it or keep on moving.\"', // 50
	'\"You can be the lead in your own life.\"', // 51
	'\"One important key to success is self-confidence. An important key to self-confidence is preparation.\"', // 52
	'\"Sometimes you’ve got to let everything go – purge yourself. If you are unhappy with anything… whatever is bringing you down, get rid of it. Because you’ll find that when you’re free, your true creativity, your true self comes out.\"', // 53
	'\"“It was when I realized I needed to stop trying to be somebody else and be myself, I actually started to own, accept and love what I had.”\"', // 54
	'\"Don\'t settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had. We need to live the best that\'s in us \"', // 55
	'\"What I know for sure is that speaking your truth is the most powerful tool we all have.\"', // 56
	'\"If you prioritize yourself, you are going to save yourself.\"', // 57
	'\"It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else\s job to take care of me but me.\"', // 58
	'\"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.\"', // 59
	'\"I thrive on obstacles. If I\'m told that it can\'t be told, then I push harder.\"', // 60
	'\"I always believed that when you follow your heart or your gut, when you really follow the things that feel great to you, you can never lose, because settling is the worst feeling in the world.\"', // 61
	'\"Embrace what makes you unique, even if it makes others uncomfortable. I didn\'t have to become perfect because I\'ve learned throughout my journey that perfection is the enemy of greatness.\"', // 62
	'\"When you take care of yourself, you\'re a better person for others. When you feel good about yourself, you treat others better.\"', // 63
	'\"You wanna know what scares people? Success. When you don\'t make moves and when you don\'t climb up the ladder, everybody loves you because you\'re not competition.\"', // 64
	'\"There have been so many people who have said to me, \'You can\'t do that,\' but I\'ve had an innate belief that they were wrong. Be unwavering and relentless in your approach.\"', // 65
	'\"I\'d rather regret the risks that didn\'t work out than the chances I didn\'t take at all.\"', // 66
	'\"When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.\"', // 67
	'\"There\'s so many things that life is, and no matter how many breakthroughs, trials will exist and we\'re going to get through it. Just be strong.\"', // 68
	'\"Don\'t let anyone steal ya joy! There\'s always someone miserable trying to bring you down ... you just wish them well & proceed on enjoying your life.\"', // 69
	'\"I realized that beauty was not a thing that I could acquire or consume, it was something I just had to be.\"', // 70
	'\"Women make up more than half of the world\'s population and potential. So it is neither just nor practical for their voices, for our voices, to go unheard at the highest levels of decision-making.\"', // 71
	'\"Everything is worth it. The hard work, the times when you\'re tired, the times where you\'re a bit sad, in the end, it\'s all worth it because it really makes me happy. There\'s nothing better than loving what you do.\"', // 72
	'\"You can\'t be hesitant about who you are.\"', // 73
	'\"I decided long ago never to walk in anyone\'s shadow; if I fail, if I succeed, at least I\'ll live as I believe.\"', // 74
	'\"When I\'m tired, I rest. I say, \'I can\'t be a superwoman today.\'\"', // 75
	'\"I truly believe that if you put your goals in writing, speak them out loud, and work for them, they will happen.\"', // 76
	'\"In complete darkness we are all the same; it is only our knowledge and wisdom that separates us. Don\'t let your eyes deceive you.\"', // 77
	'\"A great figure or physique is nice, but it\'s self-confidence that makes someone really sexy.\"', // 78
	'\"You can\'t just sit there and wait for people to give you that golden dream. You\'ve got to get out there and make it happen for yourself.\"', // 79
	'\"What you know today can affect what you do tomorrow. But what you know today cannot affect what you did yesterday.\"', // 80
	'\"If you don\’t like something, change it. If you can’t change it, change your attitude \"', // 81
	'\"I honestly think it is better to be a failure at something you love than to be a success at something you hate \"', // 82
	'\"Everyone who’s ever taken a shower has an idea. It’s the person who gets out of the shower, dries off and does something about it who makes a difference \"', // 83
	'\"There is no recipe, there is no one way to do things — there is only your way. And if you can recognize that in yourself and accept and appreciate that in others, you can make magic.\"', // 84
	'\"If we do not share our stories and shine a light on inequities, things will not change.\"', // 85
	'\"If you can find something you’re really passionate about, jump on that. If you’re passionate about [something] and you bring your talent, you’ll be unstoppable.\"', // 86
	'\"Life is a series of building, testing, changing and iterating.\"', // 87
	'\"Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.\"', // 88
	'\"They never asked me to go back over (my calculations) because when I did it, I had done my best, and it was right.\"', // 89
	'\"That brain of mine is something more than merely mortal; as time will show.\"', // 90
	'\"I never believed I could or couldn’t do something because I was a woman. I remember something my mom always told me: ‘You are the best at whatever you do.’\"', // 91
	'\"If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.\"', // 92
	'\"The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.\"', // 93
	'\"Science is not a boy\'s game, it\'s not a girl\'s game. It\'s everyone\'s game. It\'s about where we are and where we\'re going. Space travel benefits us here on Earth. And we ain\'t stopped yet. There\'s more exploration to come.\"', // 94
	'\"People don’t take opportunities because the timing is bad, the financial side unsecure. Too many people are overanalyzing. Sometimes you just have to go for it.\"', // 95
	'\"Career choice and progression doesn’t have to fit into the standard societal mold. Do what you love and want to do. Find what you’re good at, what you can sell or provide that is unique to you and go for it.\"', // 96
	'\"I realized that I don\'t have to be perfect. All I have to do is show up and enjoy the messy, imperfect, and beautiful journey of my life.\"', // 97
	'\"Don’t look any further than your own reflection for a hero\"', // 98
	'\"Loving yourself isn’t vanity. It’s sanity.\"', // 99
	'\"Most people say that it is the intellect which makes a great scientist. They are wrong: it is character.\"', // 100
	'\"We spend so much time being afraid of failure, afraid of rejection. But regret is the thing we should fear most. Failure is an answer. Rejection is an answer. Regret is an eternal question you will never have the answer to.\"', // 101
	'\"The most important thing is to try and inspire people so that they can be great at whatever they want to do.\"', // 102
	'\"You have to know what sparks the light in you so that you, in your own way, can illuminate the world.\"', // 103
	'\"You can\'t base your life on other people\'s expectations.\"', // 104
	'\"I can accept failure. Everyone fails at something. But I can\'t accept not trying.\"', // 105
	'\"Imagine what a harmonious world could be if every single person, both young and old, shared a little of what he is good at.\"', // 106
	'\"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.\"', // 107
	'\"Change will not come if we wait for some other person or if we wait for some time. We are the ones we\'ve been waiting for.\"', // 108
	'\"Don\'t count the days, make the days count.\"', // 109
	'\"Stumbling is not falling.\"', // 110	
	'\"You don\'t make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.\"', // 110
	'\"Character, not circumstances, makes the man\"', // 111
	'\"When you do the common things in life in an uncommon way, you will command the attention of the world.\"', // 112
	'\"The world is before you and you need not take it or leave it as it was when you came in.\"', // 113
	'\"If there\'s a book you want to read, but it hasn\'t been written yet, then you must write it.\"', // 114
	'\"Each of you, as an individual, must pick your own goals. Listen to others, but do not become a blind follower.\"', // 115
	'\"I think people who have faults are a lot more interesting than people who are perfect.\"', // 116
	'\"The most courageous act is to still think for yourself. Aloud.\"', // 117
	'\"I alone cannot change the world, but I can cast a stone across the water to create many ripples.\"', // 118
	'\"Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.\"', // 119
	'\"I didn’t get there by wishing for it or hoping for it, but by working for it.\"', // 120	
	'\"If you don’t like the road you’re walking, start paving another one.\"', // 120
	'\"You can waste your lives drawing lines. Or you can live your life crossing them.\"', // 121
	'\"Believe you can and you’re halfway there.\"', // 122
	'\"I’m not good at everything, I just do my best at everything.\"', // 123
	'\"Day told her sister, "When you are darkest is when you are most beautiful. It is when you are most you.\"', // 124
	'\"Stop letting people who do so little for you control so much of your mind, feelings and emotions.\"', // 125
	'\"Be on your guard; stand firm in the faith; be courageous; be strong.\"', // 126
	'\"\"', // 127
	'\"\"', // 128
	'\"\"', // 129
	'\"\"', // 130	
	'\"\"', // 131
	'\"\"', // 132
	'\"\"', // 133
	'\"\"', // 134
	'\"Now faith is the assurance of things hoped for, the conviction of things not seen.\"', // 135
	'\"\"', // 136
	'\"\"', // 137
	'\"\"', // 138
	'\"\"', // 139
	'\"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, 3 because you know that the testing of your faith produces perseverance. 4 Let perseverance finish its work so that you may be mature and complete, not lacking anything.\"', // 140	
	'\"\"', // 141
	'\"\"', // 142
	'\"...a society without jaywalkers might indicate a society without artists.\"', // 143
	'\"\"', // 144
	'\"Two are better than one ... for if they fall, one will lift up the other.\"', // 145
	'\"It is not power that corrupts but fear.\"', // 146
	'\"It\'s is important to draw wisdom from many different places.\"', // 147
	'\"You don\'t need a silver fork to eat good food.\"', // 148
	'\"\"', // 149
	'\"Learn from your past and be better because of your past,” she would say, “but don’t cry about your past. Life is full of pain. Let the pain sharpen you, but don’t hold on to it. Don’t be bitter.\"', // 150	
	'\"Step out of the history that is holding you back. Step into the new story you are willing to create.\"', // 151
	'- ', // 152
	'- ', // 153
	'- ', // 154
	'- ', // 155
	'- ', // 156
	'- ', // 157
	'- ', // 158
	'- ', // 159
	'- ', // 160	
	'- ', // 161
	'- ', // 162
	'- ', // 163
	'-\"We may encounter defeats, but we must not be defeated.\" ', // 164
	'\"To eat is a necessity, but to eat intelligently is an art.\"', // 165
	'- ', // 166
	'- ', // 167
	'- ', // 168
	'- ', // 169
	'- ', // 170	
	'- ', // 171
	'- ', // 172
	'- ', // 173
	'- ', // 174
	'- Let love be genuine. Abhor what is evil; hold fast to what is good.', // 175
	// '- ', // 176
	// '- ', // 177
	// '- ', // 178
	// '- ', // 179
	// '- ', // 180	
	// '- ', // 181
	// '- ', // 182
	// '- ', // 183
	// '- ', // 184
	// '- ', // 185
	// '- ', // 186
	// '- ', // 187
	// '- ', // 188
	// '- ', // 189
	// '- ', // 190
	// '- ', // 191
	// '- ', // 192
	// '- ', // 193
	// '- ', // 194
	// '- ', // 195
	// '- ', // 196
	// '- ', // 197
	// '- ', // 198
	// '- ', // 199
	// '- ', // 200
	// '- ', // 201
	// '- ', // 202
	// '- ', // 203
	// '- ', // 204
	// '- ', // 205
	// '- ', // 206
	// '- ', // 207
	// '- ', // 208
	// '- ', // 209
	// '- ', // 210	
	// '- ', // 210
	// '- ', // 211
	// '- ', // 212
	// '- ', // 213
	// '- ', // 214
	// '- ', // 215
	// '- ', // 216
	// '- ', // 217
	// '- ', // 218
	// '- ', // 219
	// '- ', // 220	
	// '- ', // 220
	// '- ', // 221
	// '- ', // 222
	// '- ', // 223
	// '- ', // 224
	// '- ', // 225
	// '- ', // 226
	// '- ', // 227
	// '- ', // 228
	// '- ', // 229
	// '- ', // 230	
	// '- ', // 231
	// '- ', // 232
	// '- ', // 233
	// '- ', // 234
	// '- ', // 235
	// '- ', // 236
	// '- ', // 237
	// '- ', // 238
	// '- ', // 239
	// '- ', // 240	
	// '- ', // 241
	// '- ', // 242
	// '- ', // 243
	// '- ', // 244
	// '- ', // 245
	// '- ', // 246
	// '- ', // 247
	// '- ', // 248
	// '- ', // 249
	// '- ', // 250	
	// '- ', // 251
	// '- ', // 252
	// '- ', // 253
	// '- ', // 254
	// '- ', // 255
	// '- ', // 256
	// '- ', // 257
	// '- ', // 258
	// '- ', // 259
	// '- ', // 260	
	// '- ', // 261
	// '- ', // 262
	// '- ', // 263
	// '- ', // 264
	// '- ', // 265
	// '- ', // 266
	// '- ', // 267
	// '- ', // 268
	// '- ', // 269
	// '- ', // 270	
	// '- ', // 271
	// '- ', // 272
	// '- ', // 273
	// '- ', // 274
	// '- ', // 275
	// '- ', // 276
	// '- ', // 277
	// '- ', // 278
	// '- ', // 279
	// '- ', // 280	
	// '- ', // 281
	// '- ', // 282
	// '- ', // 283
	// '- ', // 284
	// '- ', // 285
	// '- ', // 286
	// '- ', // 287
	// '- ', // 288
	// '- ', // 289
	// '- ', // 290
	// '- ', // 291
	// '- ', // 292
	// '- ', // 293
	// '- ', // 294
	// '- ', // 295
	// '- ', // 296
	// '- ', // 297
	// '- ', // 298
	// '- ', // 299
	// '- ', // 300
	// '- ', // 301
	// '- ', // 302
	// '- ', // 303
	// '- ', // 304
	// '- ', // 305
	// '- ', // 306
	// '- ', // 307
	// '- ', // 308
	// '- ', // 309
	// '- ', // 310	
	// '- ', // 310
	// '- ', // 311
	// '- ', // 312
	// '- ', // 313
	// '- ', // 314
	// '- ', // 315
	// '- ', // 316
	// '- ', // 317
	// '- ', // 318
	// '- ', // 319
	// '- ', // 320	
	// '- ', // 320
	// '- ', // 321
	// '- ', // 322
	// '- ', // 323
	// '- ', // 324
	// '- ', // 325
	// '- ', // 326
	// '- ', // 327
	// '- ', // 328
	// '- ', // 329
	// '- ', // 330	
	// '- ', // 331
	// '- ', // 332
	// '- ', // 333
	// '- ', // 334
	// '- ', // 335
	// '- ', // 336
	// '- ', // 337
	// '- ', // 338
	// '- ', // 339
	// '- ', // 340	
	// '- ', // 341
	// '- ', // 342
	// '- ', // 343
	// '- ', // 344
	// '- ', // 345
	// '- ', // 346
	// '- ', // 347
	// '- ', // 348
	// '- ', // 349
	// '- ', // 350	
	// '- ', // 351
	// '- ', // 352
	// '- ', // 353
	// '- ', // 354
	// '- ', // 355
	// '- ', // 356
	// '- ', // 357
	// '- ', // 358
	// '- ', // 359
	// '- ', // 360	
	// '- ', // 361
	// '- ', // 362
	// '- ', // 363
	// '- ', // 364
	// '- ', // 365
	// '- ', // 366


] ,person = [
	'- Dr. Mae Jemison, first African American astronaut',
	'- Dr. Martin Luther King Jr.',
	'- Thurgood Marshall, first African American U.S. Supreme Court member',
	'- Coretta Scott King',
	'- Susan L. Taylor, journalist',
	'— Carol Moseley-Braun, politician and lawyer',
	'- Desmond Tutu',
	'- Dr. Martin Luther King Jr.',
	'- Colin Powell',
	'- Jesse Owens, world record-setting Olympic athlete',
	'- Rosa Parks',
	'- Ella Fitzgerald',
	'- Mary McLeod Bethune',
	'- William Lloyd Garrison',
	'- Martin Luther King, Jr.',
	'- Muhammad Ali',
	'- Nelson Mandela',
	'- Maya Angelou',
	'- Sojourner Truth',
	'- Earl G. Graves, Sr.',
	'- Dr. Samuel DuBois Cook',
	'- Rosa Parks',
	'- Oprah Winfrey',
	'- Serena Williams',
	'- Shonda Rhimes',
	'- Jackie Robinson',
	'- Maya Angelou',
	'- Florynce Kennedy',
	'- Alice Walker',
	'- Toni Morrison', // 30
	'- Janelle Monáe', // 31
	'- Beyonce Knowles', // 32
	'- Madam C.J. Walker', // 33
	'- Wilma Rudolph', // 34
	'- Nelson Mandela', // 35
	'- James Earl Jones', //36
	'- Eldridge Cleaver', //37
	'- Diana Ross', // 38
	'- Langston Hughes', // 39
	'- Audre Lorde', // 40
	'- Katherine Dunham', // 41
	'- Nikki Giovanni', // 42
	'- James Baldwin', // 43
	'- Cory Booker', // 44
	'- Martin Luther King, Jr.', // 45
	'- Alice Walker', // 46
	'- Kamala Harris', // 47
	'- Denzel Washington', // 48
	'- Robin Roberts', // 49
	'- Phylicia Rashad', // 50
	'- Kerry Washington', // 51
	'- Arthur Ashe', // 52
	'- Tina Turner', // 53
	'- Tracee Ellis Ross', // 54
	'- Angela Bassett', // 55
	'- Oprah Winfrey', // 56
	'- Gabrielle Union', // 57
	'- Beyonce Knowles', // 58
	'- Maya Angelou', // 59
	'- Issa Rae', // 60
	'- Rihanna', // 61
	'- Janelle Monáe', // 62
	'- Solange Knowles', // 63
	'- Nicki Minaj', // 64
	'- Halle Berry ', // 65
	'- Simone Biles', // 66
	'- Laverne Cox', // 67
	'- Mary J. Blige', // 68
	'- Missy Elliot', // 69
	'- Lupita Nyong\'o', // 70
	'- Meghan Markle', // 71
	'- Aaliyah', // 72
	'- Viola Davis', // 73
	'- Whitney Houston', // 74
	'- Jada Pinkett Smith', // 75
	'- Ciara', // 76
	'- Janet Jackson', // 77
	'- Vivica A. Fox', // 78
	'- Diana Ross', // 79
	'- Condoleezza Rice', // 80
	'- Maya Angelou', // 81
	'- George Burns', // 82
	'- Nolan Bushnell', // 83
	'- Ara Katz, Chief Marketing Officer at Spring', // 84
	'- Ellen Pao, Former CEO of Reddit', // 85
	'- Megan Smith, CTO of the United States', // 86
	'- Lauren Mosenthal, Chief Technology Officer at Glassbreakers', // 87
	'- Grace Hopper, A Pioneering Computer Scientist', // 88
	'- Katherine Coleman Goble Johnson — NASA Mathematician', // 89
	'- Ada Lovelace, Mathematician and Computer Programming Visionary', // 90
	'- Privahini Bradoo — Founder and CEO of Startup Blue Oak', // 91
	'- Barbara McClintock, cytogeneticist and winner of the 1983 Nobel Prize in Physiology or Medicine', // 92
	'- Rachel Carson, marine biologist, conservationist and author', // 93
	'- Nichelle Nichols, former NASA Ambassador and Star Trek actress', // 94
	'- Michelle Zatlyn, Co-Founder of CloudFlare: ', // 95
	'- Dana Donofree, Owner of AnaOno: ', // 96
	'- Kerry Washington', // 97
	'- Allyson Partridge', // 98
	'- Andre Gide', // 99
	'- Albert Einstein', // 100
	'- Trevor Noah ', // 101
	'- Kobe Bryant', // 102
	'- Oprah Winfrey', // 103
	'- Stevie Wonder', // 104
	'- Michael Jordan', // 105
	'- Quincy Jones', // 106
	'- Martin Luther King, Jr.', // 107
	'- Barack Obama', // 108
	'- Muhammad Ali', // 109
	'- Malcolm X', // 110	
	'- Shirley Chisholm', // 110
	'- Booker T. Washington', // 111
	'- George Washington Carver', // 112
	'- James Baldwin', // 113
	'- Toni Morrison', // 114
	'- Thurgood Marshall', // 115
	'- Spike Lee', // 116
	'- Coco Chanel', // 117
	'- Mother Teresa', // 118
	'- Golda Meir', // 119
	'- Estée Lauder', // 120	
	'- Dolly Parton', // 120
	'- Shonda Rhimes', // 121
	'- Theodore Roosevelt', // 122
	'- Michael B. Jordan', // 123
	'- Lupita Nyong\'o', // 124
	'- Will Smith', // 125
	'- 1 Corinthians 16:13', // 126
	'- ', // 127
	'- ', // 128
	'- ', // 129
	'- ', // 130	
	'- ', // 131
	'- ', // 132
	'- ', // 133
	'- ', // 134
	'- Hebrews 11:1', // 135
	'- ', // 136
	'- ', // 137
	'- ', // 138
	'- ', // 139
	'- James 1:2-4', // 140	
	'- ', // 141
	'- ', // 142
	'- ', // 143
	'- ', // 144
	'- Ecclesiastes 4:9-10', // 145
	'- Paul Theroux', // 146
	'- Uncle Iroh (Avatar the Last Airbender)', // 147
	'- Paul Prudhomme', // 148
	'- Aung San Suu Kyi ', // 149
	'- Trevor Noah', // 150	
	'- Oprah Winfrey', // 151
	'- ', // 152
	'- ', // 153
	'- ', // 154
	'- ', // 155
	'- ', // 156
	'- ', // 157
	'- ', // 158
	'- ', // 159
	'- ', // 160	
	'- ', // 161
	'- ', // 162
	'- ', // 163
	'- Maya Angelou', // 164
	'- François de la Rochefoucauld ', // 165
	'- ', // 166
	'- ', // 167
	'- ', // 168
	'- ', // 169
	'- ', // 170	
	'- ', // 171
	'- ', // 172
	'- ', // 173
	'- ', // 174
	'- Romans 12:9', // 175
	// '- ', // 176
	// '- ', // 177
	// '- ', // 178
	// '- ', // 179
	// '- ', // 180	
	// '- ', // 181
	// '- ', // 182
	// '- ', // 183
	// '- ', // 184
	// '- ', // 185
	// '- ', // 186
	// '- ', // 187
	// '- ', // 188
	// '- ', // 189
	// '- ', // 190
	// '- ', // 191
	// '- ', // 192
	// '- ', // 193
	// '- ', // 194
	// '- ', // 195
	// '- ', // 196
	// '- ', // 197
	// '- ', // 198
	// '- ', // 199
	// '- ', // 200
	// '- ', // 201
	// '- ', // 202
	// '- ', // 203
	// '- ', // 204
	// '- ', // 205
	// '- ', // 206
	// '- ', // 207
	// '- ', // 208
	// '- ', // 209
	// '- ', // 210	
	// '- ', // 210
	// '- ', // 211
	// '- ', // 212
	// '- ', // 213
	// '- ', // 214
	// '- ', // 215
	// '- ', // 216
	// '- ', // 217
	// '- ', // 218
	// '- ', // 219
	// '- ', // 220	
	// '- ', // 220
	// '- ', // 221
	// '- ', // 222
	// '- ', // 223
	// '- ', // 224
	// '- ', // 225
	// '- ', // 226
	// '- ', // 227
	// '- ', // 228
	// '- ', // 229
	// '- ', // 230	
	// '- ', // 231
	// '- ', // 232
	// '- ', // 233
	// '- ', // 234
	// '- ', // 235
	// '- ', // 236
	// '- ', // 237
	// '- ', // 238
	// '- ', // 239
	// '- ', // 240	
	// '- ', // 241
	// '- ', // 242
	// '- ', // 243
	// '- ', // 244
	// '- ', // 245
	// '- ', // 246
	// '- ', // 247
	// '- ', // 248
	// '- ', // 249
	// '- ', // 250	
	// '- ', // 251
	// '- ', // 252
	// '- ', // 253
	// '- ', // 254
	// '- ', // 255
	// '- ', // 256
	// '- ', // 257
	// '- ', // 258
	// '- ', // 259
	// '- ', // 260	
	// '- ', // 261
	// '- ', // 262
	// '- ', // 263
	// '- ', // 264
	// '- ', // 265
	// '- ', // 266
	// '- ', // 267
	// '- ', // 268
	// '- ', // 269
	// '- ', // 270	
	// '- ', // 271
	// '- ', // 272
	// '- ', // 273
	// '- ', // 274
	// '- ', // 275
	// '- ', // 276
	// '- ', // 277
	// '- ', // 278
	// '- ', // 279
	// '- ', // 280	
	// '- ', // 281
	// '- ', // 282
	// '- ', // 283
	// '- ', // 284
	// '- ', // 285
	// '- ', // 286
	// '- ', // 287
	// '- ', // 288
	// '- ', // 289
	// '- ', // 290
	// '- ', // 291
	// '- ', // 292
	// '- ', // 293
	// '- ', // 294
	// '- ', // 295
	// '- ', // 296
	// '- ', // 297
	// '- ', // 298
	// '- ', // 299
	// '- ', // 300
	// '- ', // 301
	// '- ', // 302
	// '- ', // 303
	// '- ', // 304
	// '- ', // 305
	// '- ', // 306
	// '- ', // 307
	// '- ', // 308
	// '- ', // 309
	// '- ', // 310	
	// '- ', // 310
	// '- ', // 311
	// '- ', // 312
	// '- ', // 313
	// '- ', // 314
	// '- ', // 315
	// '- ', // 316
	// '- ', // 317
	// '- ', // 318
	// '- ', // 319
	// '- ', // 320	
	// '- ', // 320
	// '- ', // 321
	// '- ', // 322
	// '- ', // 323
	// '- ', // 324
	// '- ', // 325
	// '- ', // 326
	// '- ', // 327
	// '- ', // 328
	// '- ', // 329
	// '- ', // 330	
	// '- ', // 331
	// '- ', // 332
	// '- ', // 333
	// '- ', // 334
	// '- ', // 335
	// '- ', // 336
	// '- ', // 337
	// '- ', // 338
	// '- ', // 339
	// '- ', // 340	
	// '- ', // 341
	// '- ', // 342
	// '- ', // 343
	// '- ', // 344
	// '- ', // 345
	// '- ', // 346
	// '- ', // 347
	// '- ', // 348
	// '- ', // 349
	// '- ', // 350	
	// '- ', // 351
	// '- ', // 352
	// '- ', // 353
	// '- ', // 354
	// '- ', // 355
	// '- ', // 356
	// '- ', // 357
	// '- ', // 358
	// '- ', // 359
	// '- ', // 360	
	// '- ', // 361
	// '- ', // 362
	// '- ', // 363
	// '- ', // 364
	// '- ', // 365
	// '- ', // 366
]

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay)-1;
console.log('Day of year: ' + day);

newQuote();
function newQuote() {
	// randomNumber = Math.floor(Math.random() * (quotes.length));
	// seenAlready(randomNumber);

	element = document.getElementById('quote-display').innerHTML = quotes[day];
	console.log(quotes[164]);
	author_element = document.getElementById('quote-author').innerHTML = person[day];
	// var inst = setInterval(newQuote, 86400000);
}


// function validateForm() {
// 	 var name =  document.getElementById('name').value;
//   if (name == "") {
//       document.querySelector('.status').innerHTML = "Name cannot be empty";
//       return false;
//   }
//   var email =  document.getElementById('email').value;
//   if (email == "") {
//       document.querySelector('.status').innerHTML = "Email cannot be empty";
//       return false;
//   } else {
//       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if(!re.test(email)){
//           document.querySelector('.status').innerHTML = "Email format invalid";
//           return false;
//       }
//   }
//   var phone =  document.getElementById('phone').value;
//   if (phone == "") {
//       document.querySelector('.status').innerHTML = "Subject cannot be empty";
//       return false;
//   }
//   var message =  document.getElementById('message').value;
//   if (message == "") {
//       document.querySelector('.status').innerHTML = "Message cannot be empty";
//       return false;
//   }
//   document.querySelector('.status').innerHTML = "Sending...";
// }

function seenAlready(randomNumber) {
	if (seen.length == quotes.length) {
		seen =[]
		newQuote();
	}
	if (!seen.includes(randomNumber)) {
		seen.push(randomNumber)	
	} else {
		newQuote();
	}
	console.log(seen);
}








