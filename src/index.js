import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

/**
 *
 * @param {*} target
 */
const deleteFromInconpleteList = (target) => {
  //押された完了ボタンのリストを未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

/**
 *
 * @param {*} text
 */
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    deleteFromInconpleteList(completeButton.parentNode.parentNode);

    const addTarget = completeButton.parentNode.parentNode;
    const taskText = completeButton.parentNode.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //追加するリストの作成
    const div = document.createElement("div");
    div.className = "list-row";

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンのリストを完了リストから削除
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode.parentNode);

      //テキストの取得
      const taskText = backButton.parentNode.firstElementChild.innerText;

      createIncompleteList(taskText);
    });

    const p = document.createElement("p");
    p.innerText = taskText;

    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    //押された完了ボタンのリストを完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromInconpleteList(deleteButton.parentNode.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
