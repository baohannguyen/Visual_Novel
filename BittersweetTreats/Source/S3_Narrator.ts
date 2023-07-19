namespace Novel {
    export async function scene_3(): ƒS.SceneReturn {
        console.log("Scene 3");
        
        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.blackScreen);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await ƒS.update(1);
        await signalDelay1();
        ƒS.Text.addClass("NovelPages");
        await ƒS.Text.print("<p>Innerhalb einer Woche hat sich Celeste für die Stelle im Lovely Java beworben.</p>" +
        "<p>Nach ein paar Tagen hat sie eine Antwort bekommen und muss, um die Stelle zu kriegen, Probearbeiten.</p>");
        ƒS.Text.close();
        await signalDelay1();
    }
}