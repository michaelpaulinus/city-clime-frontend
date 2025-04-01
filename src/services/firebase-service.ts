import {
	doc,
	setDoc,
	getDocs,
	query,
	collection,
	getFirestore,
} from 'firebase/firestore';
import firebaseClient from '@/app/configs/firebase-client';
import weatherService from './weather-service';
import ForecastWeather from '@/models/forecast-weather';

export class FirestoreService {
	private firestoreDb;

	constructor() {
		this.firestoreDb = getFirestore(firebaseClient);
	}

	async addForecastedWeather(location: string) {
		const forecastedWeather = await weatherService.getForecastedWeather(
			location
		);

		const citiesRef = collection(this.firestoreDb, 'forecast');

		const cityDocRef = doc(citiesRef, location);

		await setDoc(cityDocRef, forecastedWeather);
	}

	async getForecastedWeather() {
		const q = query(collection(this.firestoreDb, 'forecast'));

		const querySnapshot = await getDocs(q);

		const forecastedWeather = querySnapshot.docs.map(
			(doc) => doc.data() as ForecastWeather
		);

		return forecastedWeather;
	}
}

export default new FirestoreService();
