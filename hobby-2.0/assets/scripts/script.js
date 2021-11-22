let selMain = document.querySelector("main");

        let makeColumn = document.createElement("div");
        makeColumn.setAttribute("class", "column");
        document.querySelector("body").appendChild(makeColumn);
        let selColumn = document.querySelector(".column");

        let makeHeader = document.createElement("header");
        selColumn.appendChild(makeHeader);
        let selHeader = document.querySelector("header");

        let makeProfilePic = document.createElement("div");
        makeProfilePic.setAttribute("id", "profile-pic");
        selHeader.appendChild(makeProfilePic);
        document.querySelector("#profile-pic").innerHTML = "<img class='profile-pic' src='assets/images/profile-cats.jpg' />";

        let makeHeaderTxt = document.createElement("div");
        makeHeaderTxt.setAttribute("id", "header-txt");
        selHeader.appendChild(makeHeaderTxt);

        let showNameAndAge = document.createElement("h1");
        showNameAndAge.setAttribute("id", "name-and-age");
        document.querySelector("#header-txt").appendChild(showNameAndAge);
        document.querySelector("#name-and-age").innerHTML = "caique, 27";

        let showState = document.createElement("p");
        showState.setAttribute("id", "city-and-state");
        document.querySelector("#header-txt").appendChild(showState);
        document.querySelector("#city-and-state").innerHTML = "são paulo, br";

        let makeMain = document.createElement("main");
        // makeMain.setAttribute("id", "hobby-content");
        document.querySelector(".column").appendChild(makeMain);


        let makeHobbyTitle = document.createElement("h2");
        makeHobbyTitle.setAttribute("id", "hobby-title");
        document.querySelector("main").appendChild(makeHobbyTitle);
        document.querySelector("#hobby-title").innerHTML = "cats";

        let makeHobbySub = document.createElement("p");
        makeHobbySub.setAttribute("id", "hobby-sub");
        document.querySelector("main").appendChild(makeHobbySub);
        document.querySelector("#hobby-sub").innerHTML = "(not the musical)";

        let makeReasonsTitle = document.createElement("h3");
        makeReasonsTitle.setAttribute("id", "reasons-title");
        document.querySelector("main").appendChild(makeReasonsTitle);
        document.querySelector("#reasons-title").innerHTML = "learn and love";

        let makeReasonsSub = document.createElement("p");
        makeReasonsSub.setAttribute("id", "reasons-sub");
        document.querySelector("main").appendChild(makeReasonsSub);
        document.querySelector("#reasons-sub").innerHTML = "all you have to do to love cats is learn more about them. for me, the purrrfect way to do so is  by having a cat of your own. but if you\'re not ready, you can learn more about them theoretically first:";

        let makeUL = document.createElement("ul");
        makeUL.setAttribute("id", "hobby-refs");
        document.querySelector("main").appendChild(makeUL);

        let makeListItem1 = document.createElement("li");
        makeListItem1.setAttribute("id", "item-1");
        document.querySelector("#hobby-refs").appendChild(makeListItem1);
        document.querySelector("#item-1").innerHTML = "chico\'s podcat: he is ceo at <a target='_blank' href='https://www.canseidesergato.com/'>cansei de ser gato (pt-br)</a> and speaks on behalf of the feline cause every monday on spotify;";

        let makeListItem2 = document.createElement("li");
        makeListItem2.setAttribute("id", "item-2");
        document.querySelector("#hobby-refs").appendChild(makeListItem2);
        document.querySelector("#item-2").innerHTML = "carlos ruas\' cartoon series called <a target='_blank' href='https://www.umsabadoqualquer.com/category/caes-e-gatos/''>cães e gatos (pt-br)</a>, which is an accurate portrait of cats in comparison to dogs;";

        let makeListItem3 = document.createElement("li");
        makeListItem3.setAttribute("id", "item-3");
        document.querySelector("#hobby-refs").appendChild(makeListItem3);
        document.querySelector("#item-3").innerHTML = "science stuff about cats, such as <a target='_blank' href='https://edition.cnn.com/2021/11/10/world/cats-track-owners-location-voice-scn/index.html'>this amazing cnn article (en)</a> on how cats use their hearing to keep track of their owners.";

        let makeFooter = document.createElement("footer");
        makeFooter.setAttribute("id", "cat-gallery");
        document.querySelector("body").appendChild(makeFooter);

        let gridContent = '';

        for (let i = 1; i <= 15; i++) {
            let gridItem = '<img src="assets/images/cat' + i + '.jpg">';
            gridContent = gridContent + gridItem;
        }

        document.querySelector("footer").innerHTML = gridContent;