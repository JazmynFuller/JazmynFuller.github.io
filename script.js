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
	'\"You don\'t make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.\"', // 111
	'\"Character, not circumstances, makes the man\"', // 112
	'\"When you do the common things in life in an uncommon way, you will command the attention of the world.\"', // 113
	'\"The world is before you and you need not take it or leave it as it was when you came in.\"', // 114
	'\"If there\'s a book you want to read, but it hasn\'t been written yet, then you must write it.\"', // 115
	'\"Each of you, as an individual, must pick your own goals. Listen to others, but do not become a blind follower.\"', // 116
	'\"I think people who have faults are a lot more interesting than people who are perfect.\"', // 117
	'\"The most courageous act is to still think for yourself. Aloud.\"', // 118
	'\"I alone cannot change the world, but I can cast a stone across the water to create many ripples.\"', // 119
	'\"Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.\"', // 120
	'\"I didn’t get there by wishing for it or hoping for it, but by working for it.\"', // 121	
	'\"If you don’t like the road you’re walking, start paving another one.\"', // 122
	'\"You can waste your lives drawing lines. Or you can live your life crossing them.\"', // 123
	'\"Believe you can and you’re halfway there.\"', // 124
	'\"I’m not good at everything, I just do my best at everything.\"', // 125
	'\"Day told her sister, "When you are darkest is when you are most beautiful. It is when you are most you.\"', // 126
	'\"Stop letting people who do so little for you control so much of your mind, feelings and emotions.\"', // 127
	'\"Be on your guard; stand firm in the faith; be courageous; be strong.\"', // 128
	'\"Be very careful, then, how you live--- not as unwise but as wise, making the most of every opportunity, because the days are evil.\"', // 129
	'\"Whatever is at the center of our life will be the source of our security, guidance, wisdom, and power.\"', // 130
	'\"Of all the pursuits open to men, the search for wisdom is most perfect, more sublime, more profitable, and more full of joy.\"', // 131
	'\"The best things are nearest: \n breath in your nostrils, light in your eyes, flowers at your feet, duties at your hand, the path of God just before you.\"', // 132	
	'\"It is a characteristic of wisdom not to do desperate things.\"', // 133
	'\"Character is doing the right thing when nobody\'s looking. There are too many people who think that the only thing that\'s right is to get by, and the only thing that\'s wrong is to get caught.\"', // 134
	'\"Let us learn to cast our hearts into God.\"', // 135
	'\"God wants nothing from us except our needs, and these furnish Him with room to display His bounty when He supplies them freely... Not what I have but what I o not have is the first point of contact between my soul and God.\"', // 136
	'\"Now faith is the assurance of things hoped for, the conviction of things not seen.\"', // 137
	'\"We were not sent into the world to do anything into which we cannot put our hearts.\"', // 138
	'\"Where the soul is full of peace and joy, outward surroundings and circumstances are of comparatively little account.\"', // 139
	'\"Our Lord does not care so much for the impoartance of our works as for the love with which they are done.\"', // 140
	'\"Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stress situations will never become a strong productive plant.\"', // 141
	'\"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, 3 because you know that the testing of your faith produces perseverance. 4 Let perseverance finish its work so that you may be mature and complete, not lacking anything.\"', // 142	
	'\"Better to light a candle than to curse the darkness.\"', // 143
	'\"Let us not hurry so in our pace of living that we lose sight of the art of living.\"', // 144
	'\"...a society without jaywalkers might indicate a society without artists.\"', // 145
	'\"Wisdom will not go with comforting illusions, false sentiment, or the use of rose-colored spectacles.\"', // 146
	'\"Two are better than one ... for if they fall, one will lift up the other.\"', // 147
	'\"It is not power that corrupts but fear.\"', // 148
	'\"It\'s is important to draw wisdom from many different places.\"', // 149
	'\"You don\'t need a silver fork to eat good food.\"', // 150
	'\"If you\'re feeling helpless, help someone.\"', // 151
	'\"Learn from your past and be better because of your past,” she would say, “but don’t cry about your past. Life is full of pain. Let the pain sharpen you, but don’t hold on to it. Don’t be bitter.\"', // 152	
	'\"Step out of the history that is holding you back. Step into the new story you are willing to create.\"', // 153
	'\"I hope our wisdom will grow with our power, and teach us, that the less we use our power, the greater it will be.\"', // 154
	'\"Everyone has a unique role to fill in the world and it is important in some respect. Everyone, including and perhaps especially you, is indispensable.\"', // 155
	'\"If one advances confidently in the direction of his dreams and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours. Go confidently in the direction of your dreams! Live the life you\'ve imagined! \"', // 156
	'\"Earth, with her thousand voices, praises God.\"', // 157
	'\"A man\'s wisdom gives him patience; it is to his glory to overlook an offense.\"', // 158
	'\"God wishes to be seen, and He wishes to be sought, and He wishes to be expected, and He wishes to be trusted.\"', // 159
	'\"Patience is the companion of wisdom.\"', // 160
	'\"Faith is to believe what we do not see; and the reward of this faith is to see what we believe.\"', // 161
	'\"A gentle word, a king look, a good-natured smile can work wonders and accomplish miracles.\"', // 162	
	'\"Our wisdom out to be nothing else than to embrace with humble teachableness, and at least without finding fault, whatever is taught in sacred scripture.\"', // 163
	'\"No matter what your age or your condition, your dreams are renewable. Whether you\'re 5 ir 105, you have a lifetime ahead of you!\"', // 164
	'-\"We may encounter defeats, but we must not be defeated.\" ', // 165
	'-\"Work to become, not to acquire.\" ', // 166
	'\"To eat is a necessity, but to eat intelligently is an art.\"', // 167
	'\"How much better to get wisdom than gold, to choose understanding rather than silver!\"', // 168
	'\"I often think flowers are the angels\' alphabet, whereby they write on hills and fields mysterious and beautiful lessons for us to feel and learn.\"', // 169
	'\"The well of Providence is deep. It\'s the buckets we bring to it that are small.\"', // 170
	'\"Lord, help me forget the cres of the world for today; fill my heart with light as Your blessings fall upon me and I grow closer to You. Amen.\"', // 171
	'\"Look for the heaven here on earth. It is all around you.\"', // 172	
	'\"Live your life while you have it. Life is a splendid gift---there is nothing small about it.\"', // 173
	'\"Every formula which expresses a law of nature is a hymn of praise to God.\"', // 174
	'\"If all were rain and never sun, No bow could span the hill; If all were sun and never rain, There\'d be no rainbow still.\"', // 175
	'\"A friendly look, a kindly smile, one good act, and life\'s worthwhile.\"', // 176
	'\"Let love be genuine. Abhor what is evil; hold fast to what is good.\"', // 177
	'\"The smallest bit of obdience opens heaven, and the deepest truths of God immediately becomes ours.\"', // 178
	'\"The creation of a thousand forests is in one acorn.\"', // 179
	'\"Ideals are like stars; you will not succeed in touching them with your hands. But like the seafaring man on the desert of waters, you choose them as your guides, and following them, you will reach your destiny.\"', // 180
	'\"The riches that are in the heart cannot be stolen.\"', // 181
	'\"By wisdom a house is built, and through understanding it is established through knowledge its rooms are filled with rare and beautiful treasures.\"', // 182	
	'\"Faith sees the invisible, feels the intangible, and achieves the impossible.\"', // 183
	'\"Make no little plans; they have no magic to stire men\'s blood an probably themselves will not be realized. Make big plans; aim high in hope an work.\"', // 184
	'\"It is a sign of conceit and immaturity to dispense with taking advice in major decisions.\"', // 185
	'\"What you are becoming is more important than what you are accomplishing.\"', // 186
	'\"We all mold each other\'s dreams. We all hold each other\'s fragile hopes in our hands. We all tough each other\'s hearts.\"', // 187
	'\"In a world where there is so much to be done, I felt strongly impressed that there must be someting for me to do.\"', // 188
	'\"Time, indeed, is a sacred gift, and each day is a little life.\"', // 189
	'\"The thought of You stirs us so deply that we cannot be content unless we praise You, because You have made us for Yourself and our hearts find no peace until they rest in You.\"', // 190
	'\"A gentle answer turns away wrath, but a harsh word stirs up anger.\"', // 191
	'\"I do not ask for any crown but that which all may win; nor try to conquer any world except the one within.\"', // 192
	'\"Pleasure is very seldom found where it is sought. Our brightest blazes are commonly kindled by unexpected sparks.\" ', // 193
	'\"Though I may not know what the outcome of everything in my life, dear Father, I am trusting in You, and I know You care for all my needs. How my heart rejoices that I can trust in You! Amen.\"', // 194
	'\"I\'ll tell you how the sun rose---one ribbon at a time.\"', // 195
	'\"The ordinary acts we practice every day a home are of more imporatnce to the soul than their simplicity might suggest.\"', // 196
	'\"Every person\'s life is a fairytale written by God\'s fingers.\"', // 197
	'\"Faith makes all things possible. Hope makes all things right. Love makes all things easy.\"', // 198
	'\"I would rather walk with God in the dark than go alone in the light.\"', // 199
	'\"God writes the gospel not in the Bible alone, but on the trees and flowers and clouds and stars.\"', // 200
	'\"Beauty is the mark of God sets upon virtue.\"', // 201
	'\"There is nothing but God\'s grace. We walk upon it; we live and die by it; it makes the nailes and axles of the universe.\"', // 202
	'\"what the heart has once owned and had, it shall never lose.\"', // 203
	'\"Our Creator would never have made such lovely days, and have given us the deep hearts to enjoy them, above, above and beyond all thought, unless we were meant to be immortal.\"', // 204
	'\"The fountain of beauty is the heart, and every generous thought illustrates the walls of your chamber.\"', // 205
	'\"Let the eternal Truth be your sole and supreme joy.\"', // 206
	'\"True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.\"', // 207
	'\"You promise that all bad things come to an end. Until then, Father, give me contentment with the blessings I have and faith in tomorrow. Amen.\"', // 208
	'\"All truths are easy to understand once they are discovered; the point is to discover them.\"', // 209
	'\"If you want to acheive greatness stop asking for permission.\"', // 210
	'\"To be free is to put justice, truth and service to others over and above our personal gain or our need for recognition, power, honor and success.\"', // 211
	'\"Do something for somebody else - No matter who you are or where you are, there is something you can do, somebody who needs you. Pray that you may be an instrument of God\'s peace, that where there is loneliness you may bring joy.\"', // 212	
	'\"The stomach is a wonderful servant, but a terrible master.\"', // 213
	'\"For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\"', // 214
	'\"Write it on your heart that every day is the best day in the year.\"', // 215
	'\"Don\'t wake up with the regret of what you couldn\'t accomplish yesterday. Wake up while thinking about what will be able to achieve today.\"', // 216
	'\"A beautiful life does not just happens. It is built daily by prayers, humility, sacrifice and love.\"', // 217
	'\"Difficult road often lead to beautiful destinations.\"', // 218
	'\"I hope you wake up feeling exceptional. You are important, needed and unique.\"', // 219
	'\"It cost $0.00 to be grateful for what you have\"', // 220
	'\"Eyes are useless when the mind is blind\"', // 221
	'\"Listen to silence. It has so much to say.\"', // 222
	'\"The LORD will fight for you; you need only to be still.\"', // 223	
	'\"Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.\" ', // 224
	'\"A happy person is happy, not because everything is right in his life. He is happy because his attitude towards everything in his life is right.\"', // 225
	'\"The greatest inspiration you can ever get is to know that you are an inspiration to others.\"', // 226
	'\"Just in case no one has told you today - Good Morning, I believe in you, you\'re doing great.\" ', // 227
	'\"The world is full of nice people. If you can\'t find one, be one...!!!\"', // 228
	'\"The line between failure and success is so fine... that we are often on the line and do not know it.\" ', // 229
	'\"The morning shines upon everyone the same. Its beauty is for rich or poor alike. You are not less than anyone else in the eyes of the morning.\"', // 230
	'\"\"', // 231
	'\"\"', // 232
	'\"\"', // 233
	'\"\"', // 234	
	'\"\"', // 235
	'\"\"', // 236
	'\"\"', // 237
	'\"\"', // 238
	'\"\"', // 239
	'\"\"', // 240
	'\"\"', // 241
	'\"\"', // 242
	'\"\"', // 243
	'\"\"', // 244	
	'\"\"', // 245
	'\"\"', // 246
	'\"\"', // 247
	'\"\"', // 248
	'\"\"', // 249
	'\"\"', // 250
	'\"\"', // 251
	'\"\"', // 252
	'\"\"', // 253
	'\"\"', // 254	
	'\"\"', // 255
	'\"\"', // 256
	'\"\"', // 257
	'\"\"', // 258
	'\"\"', // 259
	'\"\"', // 260
	'\"\"', // 261
	'\"\"', // 262
	'\"\"', // 263
	'\"\"', // 264	
	'\"\"', // 265
	'\"\"', // 266
	'\"\"', // 267
	'\"\"', // 268
	'\"\"', // 269
	'\"\"', // 270
	'\"\"', // 271
	'\"\"', // 272
	'\"\"', // 273
	'\"\"', // 274	
	'\"\"', // 275
	'\"\"', // 276
	'\"\"', // 277
	'\"\"', // 278
	'\"\"', // 279
	'\"\"', // 280
	'\"\"', // 281
	'\"\"', // 282
	'\"\"', // 283
	'\"\"', // 284	
	'\"\"', // 285
	'\"\"', // 286
	'\"\"', // 287
	'\"\"', // 288
	'\"\"', // 289
	'\"\"', // 290
	'\"\"', // 291
	'\"\"', // 292
	'\"\"', // 293
	'\"\"', // 294
	'\"\"', // 295
	'\"\"', // 296
	'\"\"', // 297
	'\"\"', // 298
	'\"\"', // 299
	'\"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without for newer and richer experience.\"', // 300
	'\"Nothing is impossible when God is on you side.\"', // 301
	'\"You don’t have to be great to start, but you have to start to be great.\" ', // 302
	'\"Remember who you really are today. Know that you too have the power to overcome anything you may be facing. It\'s time for you to Rise and Shine.\" ', // 303
	'\"Life never seems to be the way we want it, but we live it the best way we can. There is no perfect life, but we can fill it with perfect moments.\"', // 304
	'\"Accept what is, let go of what was, have faith in what will be.\"', // 305
	'\"Life becomes more meaningful when you realize the simple fact that you\'ll never get the same moment twice.\"', // 306
	'\"Worrying doesn\'t take away tomorrow\'s troubles, it takes away today\'s peace.\"', // 307
	'\"The importance of good people in our life is just like the importance of heartbeats.. It\'s not visible but silently supports our life\"', // 308
	'\"Set a goal that makes you want to jump out of bed in the morning.\"', // 309
	'\"When you start each day with a grateful heart, light illuminates from within.\"', // 310
	'\"You will never have this day again so make it count.\"', // 311
	'\"Don\'t worry be happy\"', // 312
	'\"Having a rough day? Place your hand over your heart. Feel that? That\'s called purpose. You\'re alive for a reason. Don\'t give up\"', // 313
	'\"Everyday may not be good, but there is something good in every day.\"', // 314	
	'\"Even the smallest of thoughts have the potential to become the biggest of successes … all you have to do is get up and get going.\"', // 315
	'\"The minute you think of giving up any relation, think of the reason why you held it so long.\"', // 316
	'\"While you wake up today, someone is breathing their last breath... Thank god for another day. Don\'t waste it!!\"', // 317
	'\"He reached down from on high and took hold of me; He drew me out of deep waters.\"', // 318
	'\"Wake up with determination, go to bed with satisfaction.\"', // 319
	'\"Loneliness is a special enjoyment when chosen by ourselves…but hard to digest when gifted by others.\"', // 320
	'\"Stop thinking of what could go wrong and start thinking of what could go right.\"', // 321
	'\"When you do something beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.\"', // 322
	'\"A mistake increases your experience & experience decreases your mistakes. You learn from your mistakes then others learn from your success.\"', // 323
	'\"Life laughs at you when you are unhappy. Life smiles at you when you are happy. But life salutes you when you make others happy.\"', // 324
	'\"Dear past, thank you for all the lessons. Dear future, I am ready.\"', // 325	
	'\"This morning is what it is because you were what you were yesterday. Be what you should be today so that you can be what you want to become tomorrow.\"', // 326
	'\"Let go of all the desires that hinders your progress and move towards your purpose.\"', // 327
	'\"Procastination is the arrogant assumption that God owes you another opportunity to do what you already had time to do.\"', // 328
	'\"When the sun’s rays first appear over the horizon, we are reminded that there is always something good about the day.\"', // 329
	'\" Smile in the mirror. Do that every morning, and you’ll start to see a big difference in your life.\"', // 330
	'\"\"', // 331
	'\"\"', // 332
	'\"\"', // 333
	'\"\"', // 334
	'\"\"', // 335
	'\"\"', // 336	
	'\"\"', // 337
	'\"\"', // 338
	'\"\"', // 339
	'\"\"', // 340
	'\"\"', // 341
	'\"\"', // 342
	'\"\"', // 343
	'\"\"', // 344
	'\"\"', // 345
	'\"\"', // 346	
	'\"\"', // 347
	'\"\"', // 348
	'\"\"', // 349
	'\"\"', // 350
	'\"\"', // 351
	'\"\"', // 352
	'\"\"', // 353
	'\"\"', // 354
	'\"\"', // 355
	'\"\"', // 356	
	'\"\"', // 357
	'\"\"', // 358
	'\"\"', // 359
	'\"\"', // 360
	'\"\"', // 361
	'\"\"', // 362
	'\"\"', // 363
	'\"\"', // 364
	'\"\"', // 365
	'\"\"', // 366


] ,person = [
	'- Dr. Mae Jemison, first African American astronaut', // 1
	'- Dr. Martin Luther King Jr.', // 2
	'- Thurgood Marshall, first African American U.S. Supreme Court member', // 3
	'- Coretta Scott King', // 4
	'- Susan L. Taylor, journalist', // 5
	'— Carol Moseley-Braun, politician and lawyer', // 6
	'- Desmond Tutu',  // 7
	'- Dr. Martin Luther King Jr.',  // 8
	'- Colin Powell', // 9
	'- Jesse Owens, world record-setting Olympic athlete', // 10
	'- Rosa Parks', // 11
	'- Ella Fitzgerald', // 12
	'- Mary McLeod Bethune', // 13
	'- William Lloyd Garrison', // 14
	'- Martin Luther King, Jr.', // 15
	'- Muhammad Ali', // 16
	'- Nelson Mandela', // 17
	'- Maya Angelou', // 18
	'- Sojourner Truth', // 19
	'- Earl G. Graves, Sr.', // 20
	'- Dr. Samuel DuBois Cook', // 21
	'- Rosa Parks', // 22
	'- Oprah Winfrey', // 23
	'- Serena Williams', //24
	'- Shonda Rhimes', //25
	'- Jackie Robinson', //26
	'- Maya Angelou', //27
	'- Florynce Kennedy', // 28
	'- Alice Walker', // 29
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
	'- Shirley Chisholm', // 111
	'- Booker T. Washington', // 112
	'- George Washington Carver', // 113
	'- James Baldwin', // 114
	'- Toni Morrison', // 115
	'- Thurgood Marshall', // 116
	'- Spike Lee', // 117
	'- Coco Chanel', // 118
	'- Mother Teresa', // 119
	'- Golda Meir', // 120
	'- Estée Lauder', // 121	
	'- Dolly Parton', // 122
	'- Shonda Rhimes', // 123
	'- Theodore Roosevelt', // 124
	'- Michael B. Jordan', // 125
	'- Lupita Nyong\'o', // 126
	'- Will Smith', // 127
	'- 1 Corinthians 16:13', // 128
	'- Ephesians 5:15-16', // 129
	'- Stephen Covey', // 130
	'- Thomas Aquinas', // 131
	'- Robert Louis Stevenson', // 132	
	'- Henry David Thoreau', // 133
	'- J. C. Watts', // 134
	'- Bernard of Clairvaux', // 135
	'- Charles H. Spurgeon', // 136
	'- Hebrews 11:1', // 137
	'- John Ruskin', // 138
	'- Hannah Whithall Smith', // 139
	'- Teresa of Avila', // 140
	'- Stephen Sigmund', // 141
	'- James 1:2-4', // 142
	'- Chinese Proverb', // 143
	'- Sir Francis Bacon', // 144
	'- Paul Theroux', // 145
	'- J. I. Packer', // 146
	'- Ecclesiastes 4:9-10', // 147
	'- Paul Theroux', // 148
	'- Uncle Iroh (Avatar the Last Airbender)', // 149
	'- Paul Prudhomme', // 150
	'- Aung San Suu Kyi ', // 151
	'- Trevor Noah', // 152
	'- Oprah Winfrey', // 153
	'- Thomas Jefferson', // 154
	'- Nathaniel Hawthorne', // 155
	'- Henry David Thoreau', // 156
	'- Samuel Taylor Coleridge', // 157
	'- Proverbs 19:11', // 158
	'- Julian of Norwich', // 159
	'- Augustine', // 160
	'- Augustine', // 161
	'- William Hazlitt', // 162	
	'- John Calvin', // 163
	'- Unknown', // 164
	'- Maya Angelou', // 165
	'- Elbert Hubbard', // 166
	'- François de la Rochefoucauld ', // 167
	'- Proverbs 16:16', // 168
	'- Louisa May Alcott', // 169
	'- Mary Webb', // 170
	'- Unknown', // 171
	'- Unknown', // 172
	'- Florence Nightingale', // 173
	'- Maria Mitchell', // 174
	'- Christina Rossetti', // 175
	'- Unknown', // 176
	'- Romans 12:9', // 177
	'- Oswald Chambers', // 178
	'- Ralph Waldo Emerson', // 179
	'- Carl Schurz', // 180
	'- Russian Proverb', // 181
	'- Proberbs 24:3-4', // 182	
	'- Unknown', // 183
	'- Daniel H. Burnham', // 184
	'- J. I. Packer', // 185
	'- Unknown', // 186
	'- Unknown', // 187
	'- Dorothea Dix', // 188
	'- Sir John Lubbock', // 189
	'- Augustine', // 190
	'- Proverbs 15:1', // 191
	'- Louisa May Alcott', // 192
	'- Samuel Johnson', // 193
	'- Unknown', // 194
	'- Emily Dickinson', // 195
	'- Thomas Moore', // 196
	'- Hans Christian Andersen', // 197
	'- Unknown', // 198
	'- Mary Gardiner Brainard', // 199
	'- Martin Luther', // 200
	'- Ralph Waldo Emerson', // 201
	'- Robert Louis Stevenson', // 202
	'- Henry Ward Beecher', // 203
	'- Nathaniel Hawthorne', // 204
	'- Francis Quarles', // 205
	'- Thomas A. Kempis', // 206
	'- William Penn', // 207
	'- Unknown', // 208
	'- Galileo', // 209
	'- Unknown', // 210
	'- Jean Vanier', // 211
	'- Elisabeth Elliot', // 212	
	'- Unknown', // 213
	'- Ephesians 2:10', // 214
	'- Ralph Waldo Emerson', // 215
	'- Unknown', // 216
	'- Dennis Castillo', // 217
	'- Zig Ziglar', // 218
	'- Mama Zara', // 219
	'- Unknown', // 220
	'- Unknown', // 221
	'- Rumi', // 222
	'- Exodus 14:14', // 223	
	'- Philippians 2:3', // 224
	'- Sundar Pichai', // 225
	'- Unknown', // 226
	'- Unknown', // 227
	'- Nishan Panwar', // 228
	'- ELbert Hubbard', // 229
	'- Unknown', // 220
	'- ', // 231
	'- ', // 232
	'- ', // 233
	'- ', // 234	
	'- ', // 235
	'- ', // 236
	'- ', // 237
	'- ', // 238
	'- ', // 239
	'- ', // 240
	'- ', // 241
	'- ', // 242
	'- ', // 243
	'- ', // 244	
	'- ', // 245
	'- ', // 246
	'- ', // 247
	'- ', // 248
	'- ', // 249
	'- ', // 250
	'- ', // 251
	'- ', // 252
	'- ', // 253
	'- ', // 254	
	'- ', // 255
	'- ', // 256
	'- ', // 257
	'- ', // 258
	'- ', // 259
	'- ', // 260
	'- ', // 261
	'- ', // 262
	'- ', // 263
	'- ', // 264	
	'- ', // 265
	'- ', // 266
	'- ', // 267
	'- ', // 268
	'- ', // 269
	'- ', // 270
	'- ', // 271
	'- ', // 272
	'- ', // 273
	'- ', // 274	
	'- ', // 275
	'- ', // 276
	'- ', // 277
	'- ', // 278
	'- ', // 279
	'- ', // 280
	'- ', // 281
	'- ', // 282
	'- ', // 283
	'- ', // 284	
	'- ', // 285
	'- ', // 286
	'- ', // 287
	'- ', // 288
	'- ', // 289
	'- ', // 290
	'- ', // 291
	'- ', // 292
	'- ', // 293
	'- ', // 294
	'- ', // 295
	'- ', // 296
	'- ', // 297
	'- ', // 298
	'- ', // 299
	'- Eleanor Roosevelt', // 300
	'- Unknown', // 301
	'- Zig Ziglar', // 302
	'- George Eliiot', // 303
	'- Unknown', // 304
	'- Sonia Ricotti', // 305
	'- Unknown', // 306
	'- Ammar Qamar', // 307
	'- Unknown', // 308
	'- Brian Tracy', // 309
	'- Roy T. Bennet', // 310
	'- Unknown', // 311
	'- Bobby McFerrin', // 312
	'- Unknown', // 313
	'- Alice Morse Earle', // 314	
	'- Unknown', // 315
	'- Natsu (Fairy Tail)', // 316
	'- Unknown', // 317
	'- 2 Samuel 22:17', // 318
	'- George Horace Lorimer', // 319
	'- Unknown', // 320
	'- Zig Ziglar', // 321
	'- John Lennon', // 322
	'- Unknown', // 323
	'- Charlie Chaplin', // 324
	'- Unknown', // 325	
	'- Hal Elrod', // 326
	'- Unknown', // 327
	'- T.D. Jakes', // 328
	'- Unknown', // 329
	'- Yoko Ono', // 330
	'- ', // 331
	'- ', // 332
	'- ', // 333
	'- ', // 334
	'- ', // 335
	'- ', // 336	
	'- ', // 337
	'- ', // 338
	'- ', // 339
	'- ', // 340
	'- ', // 341
	'- ', // 342
	'- ', // 343
	'- ', // 344
	'- ', // 345
	'- ', // 346	
	'- ', // 347
	'- ', // 348
	'- ', // 349
	'- ', // 350
	'- ', // 351
	'- ', // 352
	'- ', // 353
	'- ', // 354
	'- ', // 355
	'- ', // 356	
	'- ', // 357
	'- ', // 358
	'- ', // 359
	'- ', // 360
	'- ', // 361
	'- ', // 362
	'- ', // 363
	'- ', // 364
	'- ', // 365
	'- ', // 366
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
	console.log(quotes[day]);
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
