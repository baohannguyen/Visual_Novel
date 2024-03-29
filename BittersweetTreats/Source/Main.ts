namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("Bittersweet Treats starting");

    // Transitions
    export let transition = {
        stripes: {
            duration: 1,
            alpha: "Transitions/005.jpg",
            edge: 0.2
        },
        cafe_strips: {
            duration: 1,
            alpha: "Transitions/9.jpg",
            edge: 0.2
        },
        good_ending_transition: {
            duration: 1,
            alpha: "Transitions/018.jpg",
            edge: 0.2
        },
        normal_ending_transition: {
            duration: 1,
            alpha: "Transitions/24.png",
            edge: 0.2
        },
        bad_ending_transition: {
            duration: 1,
            alpha: "Transitions/038.jpg",
            edge: 0.2
        }

    };

    // Soundeffects
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
        spoon_stir: "Audio/Sound/spoon_stir_audio.mp3"   
    };

    // Music
    export let music = {
        main_theme: "Audio/Themes/Spring-Flowers.mp3",
        cafe_theme: "Audio/Themes/romantic.mp3",
        good_ending_theme: "Audio/Themes/Roa_Memories_new.mp3",
        normal_ending_theme: "Audio/Themes/Calm-and-Peaceful.mp3"

    };

    // Locations
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
        street: {
            name: "Street Rain",
            background: "Background/street_rain.png"
        },
        office: {
            name: "Office",
            background: "Background/office3.png"
        },
        narratorScreen: {
            name: "Narrator Talk",
            background: "Background/Narrator_screen.png"
        }


    };

    // Characters
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


    export let dataForSave = {
        celesteScore: 0, 
        pickedMeterScene: false

    };

    // export function examAnimation(): ƒS.AnimationDefinition {
    //     return {
    //         start: { translation: ƒS.positionPercent(120, 100) },
    //         end: { translation: ƒS.positionPercent(70, 100) }, //Figur verschwindete, weil Transparenz = 0 ist 
    //         duration: 3,
    //         playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //     };
    // }

    // Menu
    let menuButtons = {
        save: "Save",
        load: "Load",
        volumeUp: "+",
        volumeDown: "-",
        credits: "Credits",
        shortcuts: "Shortcuts",
        drinkList: "Getränkeliste"
    };

    let gameMenu: ƒS.Menu;

    // control volume
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

    }

    let menuIsOpen: boolean = true;

    // Credits
    export function seeCredits(): void {
        ƒS.Text.addClass("NovelPages");
        ƒS.Text.print("<b>Background</b>:" +
        "<p>- Noraneko Games: https://noranekogames.itch.io/yumebackground</p>" +
        "<p>- quarkyifu: https://quarkyifu.itch.io/visual-novel-backgrounds-office-bg-set</p>" +
        "<p><b>Character Sprites</b>:" +
        "<p>- Sutemo: https://sutemo.itch.io/female-character, https://sutemo.itch.io/female-mature-anime-sprite </p>" +
        "<p>- Sraye: https://sraye.itch.io/mature-male-character-sprites</p>" +
        "<p><b>Sounds</b>:" +
        "<p>- https://www.audiyou.de/freesounds/</p>" +
        "<p>- https://pixabay.com/de/</p>" +
        "<p><b>Music</b>:" +
        "<p>- Memories by Roa | https://soundcloud.com/roa_music1031/, Music promoted by https://www.chosic.com/free-music/all/</p>" +
        "<p>Creative Commons CC BY 3.0 https://creativecommons.org/licenses/by/3.0/</p>" +
        "<p>- Calm and Peaceful by LesFM | https://lesfm.net/relaxing-background-music/, Music promoted by https://www.chosic.com/free-music/all/</p>" +
        "<p>Creative Commons CC BY 3.0 https://creativecommons.org/licenses/by/3.0/</p>" +
        "<p>- Spring Flowers by Keys of Moon | https://soundcloud.com/keysofmoon, Music promoted by https://www.chosic.com/free-music/all/</p>" +
        "<p>Creative Commons CC BY 4.0 https://creativecommons.org/licenses/by/4.0/</p>" +
        "<p>- Music I Use: Bensound.com/free-music-for-videos</p>"

        
        );
    }

    // List of drinks
    export function seeDrinkList(): void {
        ƒS.Text.addClass("NovelPages");
        ƒS.Text.print("Schokotraum: Kakaopulver und Milch" +
            "<p>Schlafenszeit: Kaffeepulver und kochendes Wasser</p>"
            );
        
    }

    // Shortcuts
    export function seeShortcuts(): void {
        ƒS.Text.addClass("NovelPages");
        ƒS.Text.print("S = Visual Novel wird gespeichert" +
            "<p>C = Credits öffnen</p>" +
            "<p>M = Menü öffnen/schließen</p>" +
            "<p>F11 = Vollbild-Modus</p>" +
            "<p>Weiter mit LMT oder Leertaste</p>"

        );
    }

    async function buttonFunctions(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case menuButtons.save:
                await ƒS.Progress.save();
                break;
            case menuButtons.load:
                await ƒS.Progress.load();
                break;
            case menuButtons.volumeUp:
                increaseSound();
                break;
            case menuButtons.volumeDown:
                decreaseSound();
                break;
            case menuButtons.credits:
                seeCredits();
                break;
            case menuButtons.drinkList:
                seeDrinkList();
                break;
            case menuButtons.shortcuts:
                seeShortcuts();
                break;

        }

    }
    // Menu shortcuts
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
        gameMenu = ƒS.Menu.create(menuButtons, buttonFunctions, "menuButtons");
        buttonFunctions("Close");
        let scenes: ƒS.Scenes = [
            { scene: scene_1, name: "Conversation with mum" },
            { scene: scene_2, name: "School" },
            { scene: scene_3, name: "Narrator" },
            { scene: scene_4, name: "Talk with Evan" },
            { scene: scene_5, name: "Mixing Drinks" },
            { id: "Final Round", scene: scene_5_2, name: "Mixing Drinks Final" },
            { id: "Good Ending", scene: scene_6, name: "First Ending" },
            { id: "Good Ending Part 2", scene: scene_6_2, name: "GE, Talk with mum"},
            { id: "Normal Ending", scene: scene_7, name: "Second Ending" },
            { id: "Bad Ending", scene: scene_8, name: "Third Ending" },
            { id: "Last Page", scene: scene_9, name: "End of Novel"}
        ];


        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }

}
