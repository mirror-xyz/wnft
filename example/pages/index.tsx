import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getWnft } from "wnft";

type Props = { testProp: string | null };

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  let wnft: string | null;
  try {
    wnft = await getWnft();
  } catch (err) {
    console.log("err", err);
    wnft = null;
  }

  return {
    props: {
      testProp: wnft,
    },
  };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(props.testProp);
  return <div>{`${props.testProp}`}</div>;
}
