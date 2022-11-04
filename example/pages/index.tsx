import { GetStaticProps, InferGetStaticPropsType } from "next";
import * as React from "react";
import { unstable_serialize } from "swr";
import useSWRImmutable from "swr/immutable";
import { getWnft, WnftArgs } from "wnft";

const initialArgs: Readonly<WnftArgs> = {
  theme: "dark",
  title: "Hello world",
  featuredImage: null,
  avatar: null,
  displayName: "sdf",
  address: "0x123",
  accent: "blue",
};

type Props = {
  initialWnft: string;
};

export const getStaticProps: GetStaticProps<Props> = async (_context) => {
  const wnft = await getWnft(initialArgs);

  return {
    props: {
      initialWnft: wnft,
    },
  };
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [wnftArgs, _setWnftArgs] = React.useState<WnftArgs>(initialArgs);

  const wnftQuery = useSWRImmutable<string, unknown, WnftArgs>(
    wnftArgs,
    React.useCallback((args: WnftArgs) => {
      return getWnft(args);
    }, []),
    { fallback: { [unstable_serialize(initialArgs)]: props.initialWnft } }
  );

  return <div>{`${wnftQuery.data}`}</div>;
}
