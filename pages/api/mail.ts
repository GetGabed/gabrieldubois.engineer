import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

type Data = {
  status: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body)
  console.log(body)

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `
  const data = {
    to: 'gabrieldubois.eng@gmail.com',
    from: 'hello@gabrieldubois.engineer',
    subject: `${body.subject}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  try {
    await mail.send(data);
    res.status(200).json({ status: "Your message was sent successfully." });
  } catch (err) {
    res.status(500).json({ status: `There was an error sending your message. ${err}` });
  }

  res.status(200).json({ status: 'Ok' })
}
