import { handleError } from '@/Services'
import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'

const initFirebase = async () => {
  if (!firebase.apps.length) {
    const config = {
      clientId:
        '818389047636-1tjjnsa5h25tg20vm36e11e3jlebjorp.apps.googleusercontent.com',
      appId: '1:818389047636:ios:2103d5726fbd08136310c1',
      apiKey: 'AIzaSyC_WNulGytp5EydcvNXrX6iN9t58M0bhxs',
      databaseURL:
        'https://ecommerceapp-burakbinmunir-default-rtdb.firebaseio.com',
      storageBucket: 'ecommerceapp-burakbinmunir.appspot.com',
      messagingSenderId: '818389047636',
      projectId: 'ecommerceapp-burakbinmunir',
    }
    const r = await firebase.initializeApp(config, { name: 'EcommerceApp' })
  }
}

export default async () => {
  await initFirebase()
  const reference = database(firebase.app('EcommerceApp')).ref('products')
  const snapshot = await reference.once('value')
  const fetchedProducts = []
  snapshot.forEach(childSnapshot => {
    fetchedProducts.push({ id: childSnapshot.key, ...childSnapshot.val() })
  })
  return fetchedProducts
}
