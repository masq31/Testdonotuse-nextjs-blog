import next from "next"
import image from "next/image"
import { resetWarningCache } from "prop-types"
//import Date from '../components/date'

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ 
    //ID: 1,
    hello: 'Hello', 
    goodbye: 'Goodbye',
    image: 'placeholder', //src="https://site.com/public/image/$"{(setting)},
    date2: 'placeholder' //<Date dateString={date} />
                }
              )
            }
        else {null
        }
      
}
