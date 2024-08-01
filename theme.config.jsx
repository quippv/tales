import Cusdis from 'nextra-theme-blog/cusdis';

/* eslint sort-keys: error */
export default {
  comments: <Cusdis />,
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)',
        }}
      >
        {children}
      </h1>
    ),
  },
  cusdis: {
    appId: 'a2d11511-7012-4254-9483-cb49c8f4dfe8',
  },
  darkMode: true,
  dateFormatter: (date) => `Last updated at ${date.toDateString()}`,
  navs: [
    // {
    //   url: "/posts",
    //   name: "Blog",
    // },
  ],
  footer: (
      // NOTE: hide the RSS until i know what is it! 
      // <a href="/feed.xml">RSS</a>
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © Adi Purwanto.
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
};
