/*
- テキストを入力
- ボタンを押す
- リストに追加
- 削除ボタンで削除

- ボタンをクリックして関数を実行
    - テキスト情報を取得
    - ulタグにli要素と削除ボタンを追加
    - liの中身にテキスト情報を代入
    - ボタンを編集

*/

const addBtn = document.querySelector('.add-btn');
const list = document.getElementById('todo');

addBtn.addEventListener('click', function () {
    const addText = document.getElementById('add-area').value;
    const newItem = document.createElement('li');

    //タスクの内容を追加
    if (addText.length > 0) {
        newItem.textContent = addText;
        list.appendChild(newItem);
    } else {
        alert('空欄です');
    }

    //削除ボタン作成
    const delbtn = document.createElement('button');
    delbtn.textContent = '削除';
    newItem.appendChild(delbtn);
    console.log(delbtn);

    //削除ボタンを押したときのイベント
    delbtn.addEventListener('click', function () {
        const chooseList = delbtn.closest('li');
        list.removeChild(chooseList);
    });
});






