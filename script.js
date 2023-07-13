let currentPageUrl = 'https://api.atlasacademy.io/basic/NA/servant/search?className=saber';

window.onload = async () => {
    try {
        await loadServants(currentPageUrl)
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar Cards');
    }

    const buttonIds = [
        'saber',
        'archer',
        'lancer',
        'rider',
        'caster',
        'assassin',
        'berserker',
        'shielder',
        'ruler',
        'avenger',
        'moonCancer',
        'alterEgo',
        'foreigner',
        'pretender'
    ];

    buttonIds.forEach((buttonId, index) => {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', () => {
            loadPage(buttonId);
            toggleButtonSelection(index);
        });
    });
}

async function loadServants(url) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';                             // Limpar os resultados anteriores

    try {

        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.forEach((character) => {
            const card = document.createElement ("div")
            card.style.backgroundImage = `url(${character.face})`
            card.className = "cards"

            const servantNameBG = document.createElement ('div')
            servantNameBG.className = "servant-name-bg"

            const servantName = document.createElement ('span')
            servantName.className = "servant-name"
            servantName.innerText = `${character.name}`

            servantNameBG.appendChild(servantName)
            card.appendChild(servantNameBG)

            card.onclick = () => {

                const modal = document.getElementById('modal');
                modal.style.visibility = 'visible';

                const modalContent = document.getElementById('modalContent');
                modalContent.innerHTML = '';

                const ascensions = document.createElement('div');
                const textAsc = document.createElement('span');
                textAsc.className = 'ServantsDetails'
                textAsc.innerText = 'Primeira Ascenção'

                const ascsButtons = document.createElement('div')
                const buttonAsc1 = document.createElement('button');
                buttonAsc1.className = 'buttonAsc'
                buttonAsc1.textContent = '1ª Ascenção'
                const buttonAsc2 = document.createElement('button');
                buttonAsc2.className = 'buttonAsc'
                buttonAsc2.textContent = '2ª Ascenção'
                const buttonAsc3 = document.createElement('button');
                buttonAsc3.className = 'buttonAsc'
                buttonAsc3.textContent = '3ª Ascenção'
                const buttonAsc4 = document.createElement('button');
                buttonAsc4.className = 'buttonAsc'
                buttonAsc4.textContent = '4ª Ascenção'

                const servantAsc1 = document.createElement('div');
                const servantAsc2 = document.createElement('div');
                const servantAsc3 = document.createElement('div');
                const servantAsc4 = document.createElement('div');
                servantAsc1.style.backgroundImage = `url(https://static.atlasacademy.io/NA/CharaGraph/${character.id}/${character.id}a@1.png)`;
                servantAsc1.className = 'AscStage'

                if (character.id == '9935530'){
                    servantAsc1.style.backgroundImage = `url(https://static.atlasacademy.io/NA/CharaGraph/9935530/9935530a.png)`;
                    servantAsc2.style.backgroundImage = `url(https://static.atlasacademy.io/NA/CharaGraph/9935530/9935530a.png)`;
                    servantAsc3.style.backgroundImage = `url(https://static.atlasacademy.io/NA/CharaGraph/9935530/9935530a.png)`;
                    servantAsc4.style.backgroundImage = `url(https://static.atlasacademy.io/NA/CharaGraph/9935530/9935530a.png)`;
                    
                    servantAsc1.className = 'AscStage'
                    servantAsc2.className = 'AscStageSo'
                    servantAsc3.className = 'AscStageSo'
                    servantAsc4.className = 'AscStageSo'
                    
                    ascsButtons.className = 'AscStageSo'

                } else {
                    buttonAsc1.onclick = () => {
                        servantAsc1.style.backgroundImage = 
                        `url(https://static.atlasacademy.io/NA/CharaGraph/${character.id}/${character.id}a@1.png)`;
                        servantAsc1.className = 'AscStage'

                        textAsc.innerText = `Primeira Ascenção`

                        servantAsc2.className = 'AscStageSo'
                        servantAsc3.className = 'AscStageSo'
                        servantAsc4.className = 'AscStageSo'
                    }
                    
                    buttonAsc2.onclick = () => {
                        servantAsc2.style.backgroundImage = 
                        `url(https://static.atlasacademy.io/NA/CharaGraph/${character.id}/${character.id}a@2.png)`;
                        servantAsc2.className = 'AscStage'

                        textAsc.innerText = `Segunda Ascenção`

                        servantAsc1.className = 'AscStageSo'
                        servantAsc3.className = 'AscStageSo'
                        servantAsc4.className = 'AscStageSo'
                    }

                    buttonAsc3.onclick = () => {
                        servantAsc3.style.backgroundImage = 
                        `url(https://static.atlasacademy.io/NA/CharaGraph/${character.id}/${character.id}b@1.png)`;
                        servantAsc3.className = 'AscStage'

                        textAsc.innerText = `Terceira Ascenção`

                        servantAsc1.className = 'AscStageSo'
                        servantAsc2.className = 'AscStageSo'
                        servantAsc4.className = 'AscStageSo'
                    }

                    buttonAsc4.onclick = () => {
                        servantAsc4.style.backgroundImage = 
                        `url(https://static.atlasacademy.io/NA/CharaGraph/${character.id}/${character.id}b@2.png)`;
                        servantAsc4.className = 'AscStage'

                        textAsc.innerText = `Quarta Ascenção`

                        servantAsc1.className = 'AscStageSo'
                        servantAsc2.className = 'AscStageSo'
                        servantAsc3.className = 'AscStageSo'
                    }

                    ascsButtons.className = 'menuAscButtons';
                }
                ascensions.className = 'ascension';

                ascsButtons.appendChild(buttonAsc1)
                ascsButtons.appendChild(buttonAsc2)
                ascsButtons.appendChild(buttonAsc3)
                ascsButtons.appendChild(buttonAsc4)

                ascensions.appendChild(servantAsc1)
                ascensions.appendChild(servantAsc2)
                ascensions.appendChild(servantAsc3)
                ascensions.appendChild(servantAsc4)
                ascensions.appendChild(textAsc)
                ascensions.appendChild(ascsButtons)

                const name = document.createElement('span');
                name.className = ('ServantsDetails')
                name.innerText = `Nome: ${character.name}`

                const clasName = document.createElement('span');
                clasName.className = ('ServantsDetails')
                clasName.innerText = `Classe: ${capFirst(character.className)}`
                
                const attribute = document.createElement('span');
                attribute.className = ('ServantsDetails')
                attribute.innerText = `Atributo: ${capFirst(character.attribute)}`

                const rarity = document.createElement('span');
                rarity.className = ('ServantsDetails')
                if (character.rarity == 5){
                    rarity.innerText = `Raridade: ${character.rarity} ★★★★★`
                } if (character.rarity == 4){
                    rarity.innerText = `Raridade: ${character.rarity} ★★★★☆`
                } if (character.rarity == 3){
                    rarity.innerText = `Raridade: ${character.rarity} ★★★☆☆`
                } if (character.rarity == 2){
                    rarity.innerText = `Raridade: ${character.rarity} ★★☆☆☆`
                } else if (character.rarity == 1) {
                    rarity.innerText = `Raridade: ${character.rarity} ★☆☆☆☆`
                } else if (character.rarity == 0) {
                    rarity.innerText = `Raridade: ${character.rarity} ☆☆☆☆☆`
                }

                const atkHp = document.createElement('span');
                atkHp.className = ('ServantsDetails')
                atkHp.innerText = `Ataque máximo: ${character.atkMax} HP máximo: ${character.hpMax}`
                
                const divBB = document.createElement('div');
                divBB.className = 'divBack'
                const backButton = document.createElement('button');
                backButton.className = 'buttonAsc'
                backButton.textContent = 'Voltar ->'

                backButton.onclick = () => {
                    hideModal()
                }
                
                divBB.appendChild(backButton)

                modalContent.appendChild(ascensions)
                modalContent.appendChild(name)
                modalContent.appendChild(clasName)
                modalContent.appendChild(attribute)
                modalContent.appendChild(rarity)
                modalContent.appendChild(atkHp)
                modalContent.appendChild(divBB)

                const footMedia = document.getElementById('mediaFoot')
                footMedia.style.visibility = 'hidden'
            }

            mainContent.appendChild(card)
        });

        currentPageUrl = url

    } catch (error) {
        alert("Erro ao carregar os Servos!");
        console.log(error)
    }
}

async function loadPage(className) {
    if (!currentPageUrl) return;

    try {
        const classApi = `https://api.atlasacademy.io/basic/NA/servant/search?className=${className}`;
        const response = await fetch(classApi);
        // const responseJson = await response.json();

        await loadServants(classApi);

    } catch (error) {
        console.log(error);
        alert('Erro ao carregar servos dessa classe');
    }
}

function toggleButtonSelection(buttonIndex) {
    const buttons = document.getElementsByClassName('menuButton');

    for (let i = 0; i < buttons.length; i++) {
        if (i === buttonIndex) {
            buttons[i].classList.add('selected');
        } else {
            buttons[i].classList.remove('selected');    
        }
    }
}   

function hideModal() {
    const modal = document.getElementById('modal')
    modal.style.visibility = 'hidden'

    if (window.innerWidth < 480){
    const footMedia = document.getElementById('mediaFoot')
    footMedia.style.visibility = 'visible'
    }
}

function capFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  