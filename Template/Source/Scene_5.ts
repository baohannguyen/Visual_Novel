namespace Novel {
    export async function scene_5(): ƒS.SceneReturn {
        console.log("Scene 5");

        let text = {
            celeste: {
                TX01: "Ja gerne, kommt sofort.",
                TX02: "<i>Was war die erste Zutat für die Schlafenszeit?",
                // TX03: "Hmm, was kommt nochmal als nächstes dran?",
                TX04: "Jetzt fehlt mir nur noch die zweite Zutat, das war glaub ich...",
                TX05: "Hier ihr Getränk.",
                TX06: "Vielen Dank, das freut mich.",
                TX07: "Ja, das tut mir leid.",
                TX08: "Ich werde beim nächsten Mal besser darauf achten",
                TX09: "Genau, ich mische die Getränke zum ersten Mal.",
                TX10: "Aber es tut mir ebenfalls leid, dass ich das Getränk falsch gemischt habe.",
                TX11: "Die nächste Mischung wird richtig sein.",
                TX12: "... das tut mir leid."
            },
            evan: {
                TX01: "Gut gemacht Celeste.",
                TX02: "Da kommt schon der nächste Kunde.",
                TX03: "Oh, du hast ein oder zwei falsche Zutaten hinzugefügt.",
                TX04: "Das nächste Mal besser darauf aufpassen.",
                TX05: "Verstanden?",
                TX06: "Celeste, alle Zutaten, die du gemischt hast, sind komplett falsch.",
                TX07: "Es tut mir leid, dass sie ein falsches Getränk von uns bekommen haben.",
                TX08: "Sie werden direkt ein neues von uns kriegen.",
                TX09: "Ich entschuldige mich nochmal aufrichtig für das falsche Getränk.",
                TX10: "Das nächste Getränk werde ich selbst mischen.",
                TX11: "Celeste warte bitte im Büro auf mich."
            },
            customer: {
                TX01: "Hallo, ich hätte gerne einmal die Schlafenszeit bitte.",
                TX01_2: "Hallo, ich hätte gerne einmal einen ... bitte.",
                TX02: "Danke.",
                TX03: "Das schmeckt super.",
                TX04: "Hmm, das schmeckt ein bisschen anders.",
                TX05: "Aber man kann es trinken.",
                TX06: "Es tut mir leid, aber das schmeckt gar nicht gut.",
                TX07: "Das ist gar nicht das Getränk, was ich mir bestellt habe.",
                TX08: "Das ist in Ordnung, solange ich ein neues bekomme.",
                TX09: "Wenn ich das richtig höre, macht sie das zum ersten Mal.",
                TX10: "Das schmeckkt schon wieder schlecht.",
                TX11: "Also, das kann ich nicht mehr so akzeptieren.",
                TX12: "Ich habe Ihnen sogar noch ein zweite Chance gegeben."
            }

        };

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        ƒS.Sound.play(music.cafe_theme, 0.3, true);
        await ƒS.Location.show(locations.cafe);
        await ƒS.update(transition.boxes.duration, transition.boxes.alpha, transition.boxes.edge);
        await signalDelay2();
        await ƒS.update();
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.neutral_new, ƒS.positionPercent(50, 100));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.customer, text.customer.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);


        let chooseFirstIngredient = {
            ingredientOne: "Kakaopulver",
            ingredientTwo: "Kaffeepulver"
        };

        let firstChoice = await ƒS.Menu.getInput(chooseFirstIngredient, "choicesDrinks");

        switch (firstChoice) {
            case chooseFirstIngredient.ingredientOne:
                console.log("test");
                // dataForSave.celesteScore += 0;
                // console.log(dataForSave.celesteScore);
                await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);

            case chooseFirstIngredient.ingredientTwo:
                console.log("test");
                // dataForSave.celesteScore += 50;
                // console.log(dataForSave.celesteScore);
                await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);

                let chooseSecondIngredient = {
                    ingredientOne: "Milch",
                    ingredientTwo: "Zucker"
                };

                let secondChoice = await ƒS.Menu.getInput(chooseSecondIngredient, "choicesDrinks");

                switch (secondChoice) {
                    case chooseSecondIngredient.ingredientOne:
                        console.log("test");
                        // dataForSave.celesteScore += 50;
                        // console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);

                    case chooseSecondIngredient.ingredientOne:
                        console.log("test");
                        // dataForSave.celesteScore += 0;
                        // console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);








                }







        }

    }
}