const ctrl = require("../query/control");

(async () => {
  try {
    await ctrl.setDB("myDB");
    const query = { status: "A" };
    //const fields = { item: 1, status: 1 }; // select _id, item, status from inventory・・・
    //const fields = { item: 1, status: 1, _id: 0 }; // 0 は出力抑制
    //const fields = { item: 1, status: 1, "size.uom": 1 };　// ネスト要素表示指定
    //const fields = { "size.uom": 0 }; // 出力抑制指定
    const fields = { item: 1, status: 1, "instock.qty": 1 }; // ネスト要素表示指定
    //const fields = { item: 1, status: 1, instock: { $slice: -1 } }; // 配列最終要素表示
    //const fields = { item: 1, status: 1, "instock.0": -1 }; // 配列最終指定位の置要素表示

    const cursor = await ctrl.select("inventory", query, fields);
    ctrl.close();
    cursor.forEach(doc => {
      console.log(doc);
    });

    // while (cursor.hasNext()) {
    //   console.log(cursor.next());
    // }
  } catch (err) {
    console.log(err.stack);
    ctrl.close();
  }
})();
