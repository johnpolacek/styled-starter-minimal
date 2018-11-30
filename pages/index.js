import Head from './Head'
import Body from './Body'
import { H1 } from 'styled-system-html'

export default class extends React.Component {

	render () {
		return <div>
		    <Head />
		    <Body>
	    		<H1 fontSize={6} textAlign="center" p={6} color="primary">hey yo</H1>
		    </Body>
	    </div>
	}
}
