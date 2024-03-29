declare namespace Novel {
    function scene_9(): ƒS.SceneReturn;
}
declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        stripes: {
            duration: number;
            alpha: string;
            edge: number;
        };
        cafe_strips: {
            duration: number;
            alpha: string;
            edge: number;
        };
        good_ending_transition: {
            duration: number;
            alpha: string;
            edge: number;
        };
        normal_ending_transition: {
            duration: number;
            alpha: string;
            edge: number;
        };
        bad_ending_transition: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        chuckle_female: string;
        door_closing: string;
        door_opening: string;
        cafe_door: string;
        gasping: string;
        hmm: string;
        oh: string;
        rain: string;
        sigh_male: string;
        sigh_female: string;
        spoon_stir: string;
    };
    let music: {
        main_theme: string;
        cafe_theme: string;
        good_ending_theme: string;
        normal_ending_theme: string;
    };
    let locations: {
        classroom: {
            name: string;
            background: string;
        };
        cafe: {
            name: string;
            background: string;
        };
        living_room: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
        office: {
            name: string;
            background: string;
        };
        narratorScreen: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {};
        celeste: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                smile: string;
                school: string;
                school_smile: string;
                cafe_neutral: string;
                cafe_smile: string;
                cafe_smile2: string;
                cafe_happy: string;
                cafe_sad: string;
                cafe_oh: string;
            };
        };
        celeste_mum: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                sad: string;
                shocked: string;
                happy: string;
                smile: string;
            };
        };
        lucia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                smile: string;
            };
        };
        sophie: {
            name: string;
        };
        evan: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                smile: string;
                smile2: string;
                disappointed: string;
            };
        };
        customer: {
            name: string;
        };
    };
    let dataForSave: {
        celesteScore: number;
        pickedMeterScene: boolean;
    };
    function increaseSound(): void;
    function decreaseSound(): void;
    function seeCredits(): void;
    function seeDrinkList(): void;
    function seeShortcuts(): void;
}
declare namespace Novel {
    function scene_1(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_2(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_3(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_4(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_5_2(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_5(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_6(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_6_2(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_7(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_8(): ƒS.SceneReturn;
}
