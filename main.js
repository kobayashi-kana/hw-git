// memo

// if (条件) {
//     条件が真であれば実行
// } else {
//     条件が偽であれば実行
// }


////////////////////////////////
// 1　絶対値を求める関数
////////////////////////////////

function absoluteValue(numeric) {
    // 数値が0以上の時
    if (numeric >= 0) {
        return numeric
        // 数値が0以上じゃない時 → 数値が0以下の時
    } else {
        return numeric * -1
    }
}
// (例1)関数名(3)
// =>3
console.log(absoluteValue(3))
// (例2)関数名(-6)
// =>6
console.log(absoluteValue(-6))


////////////////////////////////
// 2. 3つの数の平均値を求める関数
////////////////////////////////

function average(numericOne, numericTwo, numericThree) {
    return (numericOne + numericTwo + numericThree) / 3
}
// (例)関数名(3, 4, 5)
// => 4
console.log(average(3, 4, 5))


////////////////////////////////
// 3. 球の表面積を求める関数
////////////////////////////////

// 4 * 円周率(Math.PIプロパティ) * 半径 * 半径
function ballSurfaceArea(radius) {
    // Math.round関数 → 引数として与えた数値を四捨五入
    // 2乗 → **2
    return Math.round(4 * Math.PI * radius ** 2)
}
// (例)関数名(5)
// => 314
console.log(ballSurfaceArea(5))


////////////////////////////////
// 4. 3の倍数、9の倍数、12の倍数、それ以外を返す関数
////////////////////////////////

function multiple(numeric) {
    // 3の倍数を最初に書くと、すべて3の倍数として処理される
    // 12で割ると0になる数値の時 → 12の倍数
    if (numeric % 12 === 0) {
        return "12の倍数"
    } else if (numeric % 9 === 0) {
        return "9の倍数"
    } else if (numeric % 3 === 0) {
        return "3の倍数"
    } else {
        return "その他"
    }
}

// (例1)関数名(24)
// => 12の倍数
console.log(multiple(24))

// (例2)関数名(18)
// => 9の倍数
console.log(multiple(18))

// (例3)関数名(10)
// => その他
console.log(multiple(10))


////////////////////////////////
// 5. ２つの引数を連想配列にする関数
////////////////////////////////

// 連想配列のサンプル
// var array = { apple: 10, banana: 20, melon: 30, grape: 40 }

// ※ドット記法は変数が展開されず、ブラケット記法は展開される。
// ※ブラケット記法は、プロパティ名に変数を使うことが出来る。
// ※ドット記法は変数を使ってプロパティにアクセスできない。

// ドット記法
// var obj = new Object();
//nameというプロパティに"はらこ"という文字を格納する。
// obj.name = "はらこ";
//nameというプロパティから値を取得してコンソールに表示する。
// console.log(obj.name);

// ブラケット記法
// var obj = new Object();
//nameというプロパティに"はらこ"という文字を格納する。
// obj["name"] = "はらこ";
//nameというプロパティから値を取得してコンソールに表示する。
// console.log(obj["name"]);


// 第一引数をkey, 第二引数をvalue
function associativeArray(key, value) {
    // 
    let array = { [key]: value }
    // 返り値は連想配列
    return array
    // array[key] = value　と同じ？？
}

// (例)関数名("name", "Mike")
// => { name: "Mike" }
console.log(associativeArray("name", "Mike"))


////////////////////////////////
// 6. 文字列をn回繰り返した配列を返す関数
////////////////////////////////

// for文 → 決められた回数だけ処理を繰り返す

// for(繰り返す回数の初期値 ; 繰り返しが実行される条件 ; 繰り返す回数を増減する式) {
// ここに処理内容
// }

// (例)何らかの処理を10回繰り返すプログラム
// for (var i = 0; i < 10; i++) {
// 繰り返し処理の内容
// }

// i++ → インクリメント演算子　変数「i」の値を +1　という意味


function repeat(string, n) {
    let array = [] //値を入れない　？？？
    for (let i = 0; i < n; i++) {
        // push関数 → 配列データの末尾に任意の要素を追加する
        array.push(string)
    }
    return array
}

// (例)関数名("test", 5)
// => ['test', 'test', 'test', 'test', 'test']
console.log(repeat("test", 5))







// 課題取り組み中


////////////////////////////////
// 7. 四則計算をする関数
////////////////////////////////

// switch文

// (例)
// var weather = '晴れ';

// switch (weather) {
//     case '晴れ':
//         console.log('今日は晴れです！');
//         break;
//     case '曇り':
//         console.log('今日は曇りです！');
//         break;
//     case '雨':
//         console.log('今日は雨です！');
//         break;
// }

// 「式」と「値」が一致する「case 」を発見したら、その処理を実行した後に「switch文」を抜ける
// break　を書き忘れると、次のcase処理を続けて実行してしまうので注意
// 1つの変数や値などを使って複数の条件に分岐させる場合は、switch文を使った方がプログラムがスッキリして読みやすくなる

function calc(numericOne, calcString, numericTwo) {
    switch (calcString) {
        case "addition":
            calcString = "+"
            break;
        case "subtraction":
            calcString = "-"
            break;
        case "multiplication":
            calcString = "*"
            break;
        case "division":
            calcString = "/"
            break;
        // default → 値がどの条件値にも当てはまらない場合の処理
        default:
            console.log("計算できません");
            break;
    }
    return (numericOne + calcString + numericTwo)
}

// (例1)関数名(6, "+", 2)
// => 8
console.log(calcString(6, "addition", 2))

// (例2)関数名(7, "-", 3)
// => 4

// (例3)関数名(2, "*", 3)
// => 6

// (例4)関数名(9, "/", 2)
// => 4.5

// (例5)関数名(3, "??", 3)
// => 計算できません


////////////////////////////////
// 8. n(引数)段のピラミッドに必要なブロック数を求める関数
////////////////////////////////

// (例1)関数名(5)
// (5段なので 1 + 2 + 3 + 4 + 5個ののブロックが必要)
// => 15

// (例2)関数名(15)
// => 120

// ※注意事項
// 引数、返り値ともに数値
// (ヒント)for文を使います