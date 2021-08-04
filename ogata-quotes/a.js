'use strict';

String.prototype.hashCode = function() {
    var hash = 0;
    for (let i = 0; i < this.length; i++) {
        hash = hash * 31 + this.charCodeAt(i);
        hash = hash | 0;
    }
    return hash;
};

function pseudoRandom(seed) {
  let value = seed;

  return function() {
    value = value * 16807 % 2147483647;
    return value;
  }
}

const quotes = [
"だいたい、人にモノを伝えるって、いいことも悪いことも、すべてにおいて大変な精神的苦痛を伴うものです。人と関わらない方が、絶対傷つかないですもの。 ― 有働由美子",
"努力して結果が出ると、自信になる。努力せず結果が出ると、おごりになる。努力せず結果も出ないと、後悔が残る。努力して結果が出ないとしても、経験が残る。努力してその日を迎えたんだったら、何も残らないことはないから行っといで。母。 ― 山里文代",
"上手くなくてもいいし、間違ってもいいのよ、ムッタ。まずは音を出して。音を出さなきゃ音楽は始まらないのよ。 ― 『宇宙兄弟』シャロン",
"いつやるか？今でしょ！ ― 林修",
"部屋は心を映す鏡 ― 出所不明",
"片づけは自分を知る最短の道 ― 川原卓巳",
"俺も (ローランドのことが) 好きだよ！ ― ローランド",
"普通のものを特別にしていくのは、そこにいたるまでの時間だ。 ― 中田敦彦",
"あとはご縁があるかどうかよ ― 緒方かな子",
"私ね、やっぱりあんたがいなくちゃ駄目みたい ― 桜木紫乃",
"ねぇ、これっきりにしないでね…… ― 林真理子",
"でも、好きって言いたくなかったの。たぶん、それよりずっと好きだったから。 ― 村田沙耶香",
"お話ししたくて来ちゃいました！ ― 村上まなつ",
"ほんとうにコミュニケーション能力がある人は、ちゃんと断ることができる人 ― 津田卓也",
"それは人生の1ページ ― 緒方佑奈",
"その言葉に恥じない自分になれるようにとにかく頑張ろう ― SHOCK EYE",
"幸運を作るというのは、　つまり、　条件を自ら作ることである ― 『Good Luck』より",
"神社に行け！ ― 緒方家一同"
];

function getResult() {
    const name = document.getElementById('name').value;
    if (name === "") {
        return;
    }
    
    const code = name.hashCode();
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    
    const yearStr = year.toString();
    const monthStr = month.toString();
    const time = parseInt(yearStr + monthStr, 10) % date;
    const random = pseudoRandom(code);
    
    let index;
    for (let i = 0; i < time; i++) {
        index = Math.abs(random() % quotes.length);
    }
    
    const result = document.getElementById('result');
    result.innerHTML = "今日の名言: " + quotes[index];
}