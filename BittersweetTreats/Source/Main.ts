namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("Bittersweet Treats starting");

    export let transition = {
        stripes: {
            duration: 1,
            alpha: "Transitions/005.jpg",
            edge: 0.2
        },
        boxes: {
            duration: 1,
            alpha: "Transitions/24.png",
            edge: 0.2
        }

    };

    export let sounds = {
        chuckle_female: "Audio/Sound/chuckle_female.mp3",
        door_closing: "Audio/Sound/door_closing.mp3",
        door_opening: "Audio/Sound/door_opening.mp3",
        cafe_door: "Audio/Sound/cafe_door_opening.mp3",
        gasping: "Audio/Sound/gasping_audio.mp3",
        hmm: "Audio/Sound/hmm_audio.mp3",
        oh: "Audio/Sound/oh_disappointed_female.mp3",
        rain: "Audio/Sound/rain.mp3",
        sigh_male: "Audio/Sound/sigh_male.mp3",
        sigh_female: "Audio/Sound/sigh_female.mp3",
        spoon_stir: "Audio/Sound/spoon_stir_audio.mp3",
        talking_school: "Audio/Sound/talking_school.mp3",
        chatter_school: "Audio/Sound/chatter_school.mp3"
    };
    
    export let music = {
        main_theme: "Audio/Themes/Spring-Flowers.mp3",
        cafe_theme: "Audio/Themes/romantic.mp3"

    };

    export let locations = {
        classroom: {
            name: "Classroom",
            background: "Background/classroom.png"
        },
        cafe: {
            name: "Café",
            background: "Background/restaurant.png"
        },
        living_room: {
            name: "Living Room",
            background: "Background/livingroom.png"
        },
        park: {
            name: "Park",
            background: "Background/park_evening.png"
        },
        street: {
            name: "Street Rain",
            background: "Background/street_rain.png"
        },
        office: {
            name: "Office",
            background: "Background/office3.png"
        },
        blackScreen: {
            name: "Narrator Talk",
            background: "Background/black_screen.png"
        }


    };

    export let characters = {
        narrator: {

        },
        celeste: {
            name: "Celeste",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Celeste_neutral.png",
                smile: "Images/Celeste_smile.png",
                school: "Images/Celeste_school_neutral.png",
                school_smile: "Images/Celeste_school_smile2.png",
                cafe_neutral: "Images/Celeste_cafe_neutral.png",
                cafe_smile: "Images/Celeste_cafe_smile.png",
                cafe_smile2: "Images/Celeste_cafe_smile2.png",
                cafe_happy: "Images/Celeste_cafe_happy.png",
                cafe_sad: "Images/Celeste_cafe_sad.png",
                cafe_oh: "Images/Celeste_cafe_oh.png"

            }

        },
        celeste_mum: {
            name: "Mutter",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sad: "Images/Celeste_mum_sad.png",
                shocked: "Images/Celeste_mum_shocked.png",
                happy: "Images/Celeste_mum_happy.png",
                smile: "Images/Celeste_mum_smile.png"

            }

        },
        lucia: {
            name: "Lucia",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/lucia_neutral.png",
                smile: "Images/lucia_smile.png"

            }

        },
        sophie: {
            name: "Sophie"

        },
        evan: {
            name: "Evan",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Evan_neutral.png",
                smile: "Images/Evan_smile.png",
                smile2: "Images/Evan_smile2.png",
                disappointed: "Images/Evan_disappointed.png"

            }

        },
        customer: {
            name: "Kunde"

        }


    };

    export let items = {

    };

    export let dataForSave = {
        celesteScore: 0, //Scores werden hier gespeichert
        pickedMeterScene: false

    };

    // export function addAnimation(): ƒS.AnimationDefinition {
    //     return {
    //         start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    //         end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //         duration: 1,
    //         playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //     };
    // }

    export function examAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(120, 100) },
            end: { translation: ƒS.positionPercent(70, 100)}, //Figur verschwindete, weil Transparenz = 0 ist 
            duration: 3,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    // Menü
    let menuButtons = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeUp: "+",
        volumeDown: "-",
        drinkList: "Getränkeliste",
        // ingredientList: "Zutatenliste"
    };

    let gameMenu: ƒS.Menu;

    //Lautstärke Anpassung
    let volume: number = 2.0;

    export function increaseSound(): void {
        if (volume >= 100)
        return;
        volume += 0.5;
        ƒS.Sound.setMasterVolume(volume);
    }

    export function decreaseSound(): void {
        if (volume <= 0)
        return;
        volume -= 0.5;
        ƒS.Sound.setMasterVolume(volume);
        console.log("Test");
        
    }

    // true = Menü ist offen 
    let menuIsOpen: boolean = true;

    export function seeCredits(): void {
      ƒS.Text.print("Bilder:....");  
    }

    export function seeDrinkList(): void {
        ƒS.Text.print("Schokotraum: Kakaopulver und Milch" + 
        "<p>Matcha Latte: Matchapulver und Milch</p>"
        
        
        );
    }

    // export function seeIngredientList(): void {
    //     ƒS.Text.print("Kakaopulver" +
    //     "<p>Kaffeepulver</p>" +
    //     "<p>Matchapulver</p>" +
    //     "<p>Milch</p>" +
    //     "<p>Schlagsahne</p>" +
    //     "<p>Zucker</p>"
        
    //     );
    // }




    async function buttonFunctions(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case menuButtons.save:
                await ƒS.Progress.save();
                break;
            case menuButtons.load:
                await ƒS.Progress.load();
                break;
            case menuButtons.credits:
                seeCredits();
                break;
            case menuButtons.volumeUp:
                increaseSound();
                break;
            case menuButtons.volumeDown:
                decreaseSound();
                break;   
            case menuButtons.drinkList:
                seeDrinkList();
                break;
            // case menuButtons.ingredientList:
            //     seeIngredientList();
            //     break;

            // case menuButtons.close:
            //     gameMenu.close();
            //     menuIsOpen = false; //false = Menü ist zu
            //     break;
        }

    }
    // Menü shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.L:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                seeCredits();
                break;
                


        }
    }





    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(menuButtons, buttonFunctions, "menuButtonsCSS");
        buttonFunctions("Close");
        let scenes: ƒS.Scenes = [
            // { scene: scene_1, name: "Conversation in the living room" },
            // { scene: scene_2, name: "School" }
            // { scene: scene_3, name: "Narrator" },
            // { scene: scene_4, name: "Talk with Evan" }
            { scene: scene_5, name: "Mixing Drinks" }
            // { scene: scene_6, name: "Good Ending" }
            // { scene: scene_7, name: "Normal Ending" }
            // { scene: scene_8, name: "Bad Ending" }
        ];


        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }

}
