import * as React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput,
	Button,
	View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Svg, { Ellipse } from 'react-native-svg';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.ellipse1Stack}>
					<Svg viewBox='0 0 308.44 304.34' style={styles.ellipse1}>
						<Ellipse
							fill='rgba(97,111,253,0.78)'
							cx={154}
							cy={152}
							rx={154}
							ry={152}></Ellipse>
					</Svg>
					<Svg viewBox='0 0 353.62 344.41' style={styles.ellipse}>
						<Ellipse
							fill='rgba(97,111,253,1)'
							cx={177}
							cy={172}
							rx={176}
							ry={172}></Ellipse>
					</Svg>
					<View>
						<MonoText style={styles.nameLabel}>
							Enter your username
						</MonoText>
						<View style={styles.nameInput}>
							<TextInput
								style={{ color: '#D0D0C0' }}
								onChangeText={username =>
									this.setState({ username })
								}
								value={this.state.username}
							/>
						</View>
						<MonoText style={styles.nameLabel1}>
							Enter your password
						</MonoText>
						<View style={styles.nameInput1}>
							<TextInput
								style={{ color: '#D0D0C0' }}
								onChangeText={password =>
									this.setState({ password })
								}
								value={this.state.password}
							/>
						</View>
						<View style={styles.submitButton}>
							<Button
								style={styles.submitButton}
								title='SUBMIT'
								onPress={() => this.nameSubmit(this.state.name)}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

HomeScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	nameLabel: {
		top: 70,
		left: 65,
		fontSize: 23,
		color: 'black',
	},
	submitButton: {
		borderColor: 'black',
		borderWidth: 1,
		fontFamily: 'bubblegum',
		color: '#fff',
		backgroundColor: '#1E90FF',
		borderRadius: 30,
		top: 180,
		left: 110,
		width: 130,
	},
	nameInput: {
		borderColor: 'black',
		borderBottomWidth: 1,
		color: '#D0D0C0',
		fontSize: 20,
		top: 75,
		left: 80,
		width: 200,
		height: 30,
	},
	nameLabel1: {
		top: 110,
		left: 90,
		fontSize: 23,
		color: 'black',
	},
	nameInput1: {
		borderColor: 'black',
		borderBottomWidth: 1,
		color: '#D0D0C0',
		fontSize: 20,
		top: 190,
		left: 100,
		width: 230,
		height: 30,
		position: 'absolute',
	},
	container: {
		flex: 1,
	},
	ellipse1: {
		top: 206,
		left: 164,
		width: 308,
		height: 304,
		position: 'absolute',
	},
	ellipse: {
		top: 0,
		left: 0,
		width: 354,
		height: 344,
		position: 'absolute',
	},

	ellipse1Stack: {
		width: 472,
		height: 510,
		marginTop: 117,
		marginLeft: -57,
	},
});
