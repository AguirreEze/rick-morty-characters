interface Iprops {
  url: string;
}

export default async function Episode({ url }: Iprops): Promise<JSX.Element> {
  const data = await fetch(url).then(async (res) => await res.json());
  return (
    <h3>
      {data?.episode} - {data?.name} - {data?.air_date}
    </h3>
  );
}
