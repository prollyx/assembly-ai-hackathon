import {PageLayout} from "../../../components/page-layout";
import { useRouter } from 'next/router'


export default function ProjectPage() {

  const router = useRouter()
  const { id } = router.query

  return (
    <PageLayout>
      <h1>{id}</h1>
        <h2>Project Page</h2>
    </PageLayout>
  );
}
