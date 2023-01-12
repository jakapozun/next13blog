import {NextStudioLoading} from "next-sanity/src/studio/NextStudioLoading";
import config from '../../../../sanity.config';
export default function Loading() {
    return <NextStudioLoading config={config}/>
}