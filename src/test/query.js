const ctrl = require("../query/control");

(async () => {
  try {
    await ctrl.setDB("myDB");
    // 並べ順も一致
    //const query = { tags: ["red", "blank"] };
    // 構成要素一致（順不問）
    //const query = { tags: { $all: ["red", "blank"] } };
    //const query = { tags: ["red"] }; // 包含
    //const query = { tags: "red" }; // 一致
    //const query = { "dim_cm.1": { $gt: 25 } }; // = "dim_cm": { $gt: 25 } last element
    //const query = { "dim_cm.0": { $gt: 20 } }; // first element dim_cm[0] > 20
    //const query = { tags: { $size: 2 } }; // 要素数
    //const query = { instock: { warehouse: "A", qty: 5 } };
    //const query = { instock: { $elemMatch: { qty: 5, warehouse: 'A' } } }; // $elemMatch演算により要素順番不問
    //const query = { "instock.qty": { $lte: 20 } }; // Object配列内の要素値指定
    //const query = { "instock.0.qty": { $lte: 20 } }; // Object配列内特定位置の要素値指定
    //const query = { instock: { $elemMatch: { qty: { $gt: 10, $lte: 20 } } } }; // 配列内要素属性の範囲指定
    //const query = { "instock.qty": { $gt: 10, $lte: 20 } }; // 上と同じ
    //const query = {"instock.qty": 5,"instock.warehouse": "A"}; // 配列内要素の属性とＯＲ

    const query = {
      "instock.qty": 5,
      "instock.warehouse": "A"
    };

    const resule = ctrl.select("inventory", query);
    ctrl.close();
    console.log(resule);
  } catch (err) {
    console.log(err.stack);
    ctrl.close();
  }
})();
