import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis vel tortor iaculis mattis at quis urna. Maecenas interdum magna quis lectus mollis, id sollicitudin magna faucibus. Suspendisse potenti. Nullam ac quam id metus tincidunt imperdiet vitae vitae purus. Aliquam condimentum ultrices ligula. Curabitur leo libero, malesuada at orci non, aliquet iaculis velit. Pellentesque luctus urna quis purus imperdiet, eu tristique erat pharetra. Phasellus et nibh aliquet, dignissim diam quis, molestie neque. Pellentesque ultricies venenatis quam, quis mattis dui malesuada aliquam. Duis fringilla eget nisl sit amet egestas. Vestibulum mauris velit, venenatis a volutpat eu, malesuada sed magna. Morbi ultrices turpis nisl, et finibus mauris dapibus et. In dapibus neque nulla, convallis ullamcorper est ullamcorper sed. Suspendisse sagittis magna eget magna vestibulum fringilla.</p>
      
      <p>Donec feugiat orci sed ligula sollicitudin sagittis. Maecenas nec scelerisque nunc, porttitor ornare nunc. Nullam pharetra nec augue eget mattis. In in ipsum in risus vulputate interdum a nec risus. Integer convallis tempus est, eget consequat eros vehicula id. Praesent quis urna dui. Aliquam vel sapien a nibh convallis fringilla.</p>

      <p>Vivamus maximus sit amet dolor at sagittis. Aenean et dolor porta, dictum orci scelerisque, dapibus augue. Mauris venenatis magna a ipsum pretium, eu bibendum erat mattis. Nam ultrices arcu et ante pretium cursus. Integer auctor nisi odio, sollicitudin vulputate leo blandit eu. Morbi vel faucibus magna, ut lobortis ante. Sed nec hendrerit lacus. Quisque massa ipsum, condimentum quis scelerisque eget, convallis a elit.</p>
    </Layout>
  );
}
