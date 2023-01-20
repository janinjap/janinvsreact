import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';

(async () => {
    await DataStore.save(
        new User({
            "name": "Lorem ipsum dolor sit amet"
        })
    );
})();