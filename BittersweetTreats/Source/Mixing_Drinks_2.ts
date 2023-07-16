namespace Novel {
    export async function scene_5_1(): ƒS.SceneReturn {
        let text = {
            celeste: {
                TX01: "Ja gerne, kommt sofort.",
                TX02: "<i>Was war die erste Zutat für die Matcha Latte?",
                TX03: "Jetzt fehlt mir nur noch die zweite Zutat, das war glaub ich...",
                TX04: "Hier ihr Getränk.",
                TX05: "Vielen Dank, das freut mich."
            },
            evan: {
                TX01: "Sehr gut Celeste, ein weiterer Kunde war zufrieden mit dem Getränk."
            },
            customer: {
                TX01: "Hallo, ich hätte gerne einmal die Matcha Latte bitte.",
                TX02: "Danke.",
                TX03: "Das schmeckt super.",
            }
        };

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
            ingredientTwo: "Grünteepulver"
        };

        let firstChoice = await ƒS.Menu.getInput(chooseFirstIngredient, "choicesDrinks");

        switch (firstChoice) {
            case chooseFirstIngredient.ingredientOne:
                console.log("Kakaopulver");
                dataForSave.celesteScore += 50;
                console.log(dataForSave.celesteScore);
                ƒS.Sound.play(sounds.spoon_stir, 1);
                await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);

                let chooseSecondIngredient = {
                    ingredientOne: "Milch",
                    ingredientTwo: "Sahne"
                };

                let secondChoice = await ƒS.Menu.getInput(chooseSecondIngredient, "choicesDrinks");

                switch (secondChoice) {
                    case chooseSecondIngredient.ingredientOne:
                        console.log("Milch");
                        dataForSave.celesteScore += 50;
                        console.log(dataForSave.celesteScore);
                        ƒS.Sound.play(sounds.spoon_stir, 1);
                        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX02);
                        await ƒS.Speech.tell(characters.customer, text.customer.TX03);
                        await ƒS.Character.show(characters.evan, characters.evan.pose.smile, ƒS.positionPercent(85, 105));
                        await ƒS.update(1);
                        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
                        await ƒS.Character.hide(characters.evan);
                        await ƒS.Character.hide(characters.celeste);
                        ƒS.Speech.hide();
                        await ƒS.update(1);

                        return "Ending1";

                }
        }
    }
}