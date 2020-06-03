$(document).on('turbolinks:load',()=> {
  // メソッドの定義
  var methods = {
    email: function (value, element) { // メールアドレスの正規表現
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value);
    },
    // password: function (value, element) { // パスワードの正規表現
    //   return this.optional(element) || /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i.test(value);
    // },
  }
  // メソッドの追加
  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });
  // バリデーションの実行
  $("#new_user").validate({
    rules: {
      "user[name]": {
        required: true,  // ニックネームの入力有無チェック
        maxlength: 8     //最大文字数を設定
      },
      "user[email]": {              // name属性を""で囲む
        required: true,  // メールアドレスの入力有無チェック
        email: true      // メールアドレスの正規表現チェック
      },
      "user[password]": {
        required: true,   // パスワードの入力有無チェック
        // password: true,   // パスワードの正規表現チェック
        minlength: 6    //最小文字数を設定
      },
      "user[password_confirmation]": {
        required: true,
        // password: true,
        equalTo: 'input[name="user[password]"]'
      },
    },
    messages: {
      "user[name]": {
        required: "お名前を入力してください。",
        maxlength: "8文字以下で入力してください"
      },
      "user[email]": {
        required: "メールアドレスを入力してください。",
        email: "フォーマットが不適切です"
      },
      "user[password]": {
        required: "パスワードを入力してください。",
        password: "6文字以上  英字と数字両方を含むパスワードを入力してください"
      },
      "user[password_confirmation]": {
        required: "確認用パスワードを入力してください。",
        equalTo: "上記で入力されたパスワードと一致しません"
      },
    },
    errorClass: "invalid", // バリデーションNGの場合に追加するクラス名の指定
    errorElement: "p", // エラーメッセージの要素種類の指定
    validClass: "valid", // バリデーションOKの場合に追加するクラス名の指定
  });

  // 入力欄をフォーカスアウトしたときにバリデーションを実行
  $("#user_name,#user_email,#user_password,#user_password_confirmation").blur(function () {
    $(this).valid();
  });

  

  $('#top').click(function () {
    console.log('qqqqq');
    $('html,body').animate({ scrollTop: 0 }, 500);
    return false;
  });
    

});