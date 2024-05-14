const question = 'ゲーム史上最も売れたゲーム機は次のうちどれ?';
const answers = [
    'スーパーファミコン',
    'プレイステーション2',
    '任天堂スイッチ',
    '任天堂DS'
];

const corect = '任天堂DS';

document.getElementById('js-question').textContent = question;

const button = document.getElementsByTagName('button');

let button_index = 0;
while (button_index < button.length){
    button[button_index].textContent = answers[button_index];
    button_index++;
}

button[0].addEventListener('click', () => {
    if (corect === button[0].textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});

button[1].addEventListener('click', () => {
    if (corect === button[1].textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});

button[2].addEventListener('click', () => {
    if (corect === button[2].textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});

button[3].addEventListener('click', () => {
    if (corect === button[3].textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});