class TransactionalMailer < ActionMailer::Base
  def contact_us(email,from,  body)
    @email = email
    @from = from 
    @message = body
    mail(to: email, subject: "New Message from #{from}", reply_to: from)
  end
  # def contact_acknowledgement(email,from,  body)
  #   @email = email
  #   mail(to: email, subject: "Thanks for reaching out", reply_to: email)
  # end
end
