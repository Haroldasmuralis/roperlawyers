// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'bootstrap'
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"
require('jquery')




Rails.start()
Turbolinks.start()


$(document).ready(function () {
  $("#contactModal #successMessageBody, #contactModal #errorMessageBody, #contactModal .ct-spinner").hide()
  $("#contactForm").on("submit", (e) => {
    e.preventDefault();
    const $form = $(this)

    $form.find(".ct-spinner").show()
    $form.find("button[type=submit]").attr("disabled", "disabled")
    const email = $form.find("[name=email]").val()
    const message = $form.find("[name=message]").val()
    $.ajax({
      url: "/contact_us",
      beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
      type: "POST",
      data: {
        email: email,
        message: message
      },
    }).fail(function (data) {

      $("#errorMessageBody").show()
      $("#contactFormBody").hide()
      $("#successMessageBody").hide()
      $form.find("button[type=submit]").hide()


    }).then(function (data) {
      $form.find("button[type=submit]").hide()
      $("#errorMessageBody").hide()
      $("#contactFormBody").hide()
      $("#successMessageBody").show()
    })
      .done(function (data) {
        $form.find("button[type=submit]").removeAttr("disabled")
      });

  })

  $("#submitButton").on("click", function (e) {
    e.preventDefault();
    const email = $('#email').val()
    $.ajax({
      url: "/contact_us",
      beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
      type: "POST",
      data: {
        email: email
      },
    })
      .done(function (data) {
        console.log('data', data)
      });
  })
});

