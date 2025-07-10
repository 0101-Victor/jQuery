$(document).ready(function() {
  // 1. 文字色変化：赤に変更
  $('#change-color').click(function() {
    $('#target').css('color', 'red');
  });

  // 2. 文字内容変化：「こんばんは！」に変更
  $('#change-text').click(function() {
    $('#target').text('こんばんは！');
  });

  // 3. フェードアウト：ゆっくり文字を消す
  $('#fade-out').click(function() {
    $('#target').fadeOut('slow');
  });

  // 4. フェードイン：ゆっくり文字を表示
  $('#fade-in').click(function() {
    $('#target').fadeIn('slow');
  });
});
