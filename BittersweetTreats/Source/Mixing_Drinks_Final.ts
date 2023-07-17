namespace Novel {
    export async function scene_5_2(): ƒS.SceneReturn {
        let text = {
            celeste: {
                TX01: "Ja gerne, kommt sofort.",
                TX02: "<i>Was war die erste Zutat für die Schlafenszeit?",
                TX03: "<i>Jetzt fehlt mir nur noch die zweite Zutat, das war glaub ich...</i>",
                TX04: "Hier ihr Getränk.",
                TX05: "Vielen Dank, das freut mich.",
                TX06: "Oh, das tut mir leid.",
                TX07: "Ich werde beim nächsten Mal besser darauf achten.",
                TX08: "Genau, ich mische die Getränke zum ersten Mal.",
                TX09: "Aber es tut mir ebenfalls leid, dass ich das Getränk falsch gemischt habe.",
                TX10: "Die nächste Mischung wird auf jeden Fall richtig sein.",
                TX11: "... das tut mir wirklich leid.",
                TX12: "<i>Hmm, da bin ich gespannt, was er von meine Arbeit sagen wird.</i>",
                TX13: "Ja, können wir gerne machen."
            },
            evan: {
                TX01: "Super gemacht Celeste, alle Kunden waren zufrieden mit deinen Getränken.",
                TX02: "Da kommt schon der nächste Kunde.",
                TX03: "Oh, du hast eine falsche Zutat hinzugefügt.",
                TX04: "Das nächste Mal besser darauf aufpassen.",
                TX05: "Verstanden?",
                TX06: "Celeste, alle Zutaten, die du gemischt hast, sind komplett falsch.",
                TX07: "Es tut mir leid, dass sie ein falsches Getränk von uns bekommen haben.",
                TX08: "Sie werden direkt ein neues von uns kriegen.",
                TX09: "Ich entschuldige mich nochmal aufrichtig für das falsche Getränk.",
                TX10: "Das nächste Getränk werde ich selbst mischen.",
                TX11: "Celeste geh bitte sofort ins Büro und warte dort auf mich.",
                TX12: "Das wars mit deiner Probearbeit.",
                TX13: "Wir können gerne in meinem Büro weiterreden."
            },
            customer: {
                TX01: "Ich hätte gerne die Schlafenszeit bitte.",
                TX02: "Vielen Dank.",
                TX03: "Das schmeckt richtig gut.",
                TX03_1: "Ich bin mit dem Getränk zufrieden.",
                TX04: "Hmm, das schmeckt ein bisschen anders.",
                TX05: "Aber man kann es trinken.",
                TX06: "Es tut mir leid, aber das schmeckt gar nicht gut.",
                TX07: "Das ist gar nicht das Getränk, was ich mir bestellt habe.",
                TX08: "Das ist in Ordnung, solange ich ein neues bekomme.",
                TX09: "Wenn ich das richtig höre, macht sie das zum ersten Mal.",
                TX10: "Das schmeckt schon wieder schlecht.",
                TX11: "Also, das kann ich nicht mehr so akzeptieren.",
                TX12: "Das kann gar nicht sein.",
                TX13: "Ich habe Ihnen öfters eine Chance gegeben."
            }
        };

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.cafe);
        await ƒS.update(transition.boxes.duration, transition.boxes.alpha, transition.boxes.edge);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_smile, ƒS.positionPercent(50, 100));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.customer, text.customer.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);

        let chooseFirstIngredient = {
            ingredientOne: "Matchapulver",
            ingredientTwo: "Kaffeepulver"
        };

        let firstChoice = await ƒS.Menu.getInput(chooseFirstIngredient, "choicesDrinks");

        switch (firstChoice) {
            case chooseFirstIngredient.ingredientOne:
                console.log("Matchapulver");
                dataForSave.celesteScore += 0;
                console.log(dataForSave.celesteScore);
                ƒS.Sound.play(sounds.spoon_stir, 1);
                await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);

                let chooseSecondIngredient = {
                    ingredientOne: "heißes Wasser",
                    ingredientTwo: "Sahne"
                };

                let secondChoice = await ƒS.Menu.getInput(chooseSecondIngredient, "choicesDrinks");

                switch (secondChoice) {
                    case chooseSecondIngredient.ingredientOne:
                        console.log("heißes Wasser");
                        dataForSave.celesteScore += 50;
                        console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX04);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX05);
                        await ƒS.Character.show(characters.evan, characters.evan.pose.neutral, ƒS.positionPercent(85, 105));
                        await ƒS.update(1);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
                        await ƒS.Character.hide(characters.celeste);
                        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_oh, ƒS.positionPercent(50, 100));
                        await ƒS.update(0.3);
                        ƒS.Sound.play(sounds.oh, 1);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX12);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX13);
                        await ƒS.Character.hide(characters.evan);
                        await ƒS.Character.hide(characters.celeste);
                        ƒS.Speech.hide();
                        await ƒS.update(1);
                        await signalDelay1();
                        ƒS.Sound.fade(music.cafe_theme, 0, 0);
                        return "Normal Ending";


                    case chooseSecondIngredient.ingredientTwo:
                        console.log("Sahne");
                        dataForSave.celesteScore += 0;
                        console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);
                        if (dataForSave.celesteScore > 0) {
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX04);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX05);
                            await ƒS.Character.show(characters.evan, characters.evan.pose.neutral, ƒS.positionPercent(85, 105));
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX03);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX04);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX05);
                            await ƒS.Character.hide(characters.celeste);
                            await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_oh, ƒS.positionPercent(50, 100));
                            await ƒS.update(0.3);
                            ƒS.Sound.play(sounds.oh, 1);
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX12);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX13);
                            await ƒS.Character.hide(characters.evan);
                            await ƒS.Character.hide(characters.celeste);
                            ƒS.Speech.hide();
                            await ƒS.update(1);
                            await signalDelay1();
                            ƒS.Sound.fade(music.cafe_theme, 0, 0);
                            return "Normal Ending";
                        } else {
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                            await signalDelay1();
                            await ƒS.Speech.tell(characters.customer, text.customer.TX10);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX11);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX12);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX13);
                            await ƒS.Character.hide(characters.celeste);
                            await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_sad, ƒS.positionPercent(50, 100));
                            await ƒS.update(0.3);
                            await ƒS.Character.show(characters.evan, characters.evan.pose.disappointed, ƒS.positionPercent(85, 105));
                            await ƒS.update(1);
                            ƒS.Sound.play(sounds.sigh_male, 1);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX09);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX10);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX11);
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX11);
                            await ƒS.Character.hide(characters.evan);
                            await ƒS.Character.hide(characters.celeste);
                            ƒS.Speech.hide();
                            await ƒS.update(1);
                            await signalDelay1();
                            await signalDelay1();
                            ƒS.Sound.fade(music.cafe_theme, 0, 0);
                            return "Bad Ending";

                        }


                }

            ////////////////////////////////////////////////////////
            case chooseFirstIngredient.ingredientTwo:
                console.log("Kaffeepulver");
                dataForSave.celesteScore += 50;
                console.log(dataForSave.celesteScore);
                ƒS.Sound.play(sounds.spoon_stir, 1);
                await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);

                let secondOptionIngredient = {
                    ingredientOne: "heißes Wasser",
                    ingredientTwo: "Sahne"
                };

                let secondRound = await ƒS.Menu.getInput(secondOptionIngredient, "choicesDrinks");

                switch (secondRound) {
                    case secondOptionIngredient.ingredientOne:
                        console.log("heißes Wasser");
                        dataForSave.celesteScore += 50;
                        console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);
                        if (dataForSave.celesteScore <= 150) {
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX03_1);
                            await ƒS.Character.show(characters.evan, characters.evan.pose.neutral, ƒS.positionPercent(85, 105));
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX12);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX13);
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX12);
                            await ƒS.Character.hide(characters.evan);
                            await ƒS.Character.hide(characters.celeste);
                            ƒS.Speech.hide();
                            await ƒS.update(1);
                            await signalDelay1();
                            ƒS.Sound.fade(music.cafe_theme, 0, 0);
                            return "Normal Ending";
                        } else {
                            await signalDelay1();
                            await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                            await ƒS.Speech.tell(characters.customer, text.customer.TX03);
                            await ƒS.Character.show(characters.evan, characters.evan.pose.smile, ƒS.positionPercent(85, 105));
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX01);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX12);
                            await ƒS.Speech.tell(characters.evan, text.evan.TX13);
                            await ƒS.Character.hide(characters.evan);
                            await ƒS.Character.hide(characters.celeste);
                            ƒS.Speech.hide();
                            await ƒS.update(1);
                            await signalDelay1();
                            ƒS.Sound.fade(music.cafe_theme, 0, 0);
                            return "Good Ending";

                        }


                    case secondOptionIngredient.ingredientTwo:
                        console.log("Sahne");
                        dataForSave.celesteScore += 0;
                        console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX04);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX05);
                        await ƒS.Character.show(characters.evan, characters.evan.pose.neutral, ƒS.positionPercent(85, 105));
                        await ƒS.update(1);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
                        await ƒS.Character.hide(characters.celeste);
                        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_oh, ƒS.positionPercent(50, 100));
                        await ƒS.update(0.3);
                        ƒS.Sound.play(sounds.oh, 1);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX12);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX13);
                        await ƒS.Character.hide(characters.evan);
                        await ƒS.Character.hide(characters.celeste);
                        ƒS.Speech.hide();
                        await ƒS.update(1);
                        await signalDelay1();
                        ƒS.Sound.fade(music.cafe_theme, 0, 0);
                        return "Normal Ending";

                }
        }
    }
}