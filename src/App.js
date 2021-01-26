import './App.css';
import { useState, useXXXXX } from 'react';
import axios from 'axios';
import NetlifyAPI from 'netlify';

function deployViaBuildHook() {
  console.log('DEPLOYING VIA BUILD HOOK...');
  axios
    .post('https://api.netlify.com/build_hooks/6009a05a7f8fd509384b0634')
    .then((res) => console.log('deploy via build hook res:', res))
    .catch((err) => console.log('deploy via build hook error:', err));
}

const listSites = async function () {
  console.log('LISTING SITES...');
  const client = new NetlifyAPI('W43FJpBK-fIAz1BxbBZB3-zmn6vQn4-3PjEHIXkT-aM');
  const sites = await client.listSites();
  console.log('🚀 ~ file: App.js ~ line 20 ~ listSites ~ sites', sites);
};

const listSiteBuilds = async function () {
  console.log('LISTING SITE BUILDS...');
  const client = new NetlifyAPI('W43FJpBK-fIAz1BxbBZB3-zmn6vQn4-3PjEHIXkT-aM');
  const builds = await client.listSiteBuilds({
    site_id: 'cf3b4320-664f-45d5-ba30-fd1e17803b87',
  });
  console.log('🚀 ~ file: App.js ~ line 20 ~ listSiteBuilds ~ builds', builds);
};

const getSpecificBuild = async function () {
  console.log('GETTING SPECIFIC BUILD...');
  const client = new NetlifyAPI('W43FJpBK-fIAz1BxbBZB3-zmn6vQn4-3PjEHIXkT-aM');
  const build = await client.getSiteBuild({
    build_id: '6009b3d429cdbe0093882bfa',
  });
  console.log('🚀 ~ file: App.js ~ line 29 ~ getSpecificBuild ~ build', build);
};

const getSpecificDeploy = async function () {
  console.log('GETTING SPECIFIC DEPLOY...');
  const client = new NetlifyAPI('W43FJpBK-fIAz1BxbBZB3-zmn6vQn4-3PjEHIXkT-aM');
  const deploy = await client.getDeploy({
    deploy_id: '6009b3d429cdbe0093882bfc',
  });
  console.log(
    '🚀 ~ file: App.js ~ line 38 ~ getSpecificDeploy ~ deploy',
    deploy
  );
};

const createSiteBuild = async function () {
  console.log('CREATING SITE BUILD...');
  const client = new NetlifyAPI('W43FJpBK-fIAz1BxbBZB3-zmn6vQn4-3PjEHIXkT-aM');
  const build = await client.createSiteBuild({
    site_id: 'cf3b4320-664f-45d5-ba30-fd1e17803b87',
  });
  console.log('🚀 ~ file: App.js ~ line 50 ~ createSiteBuild ~ build', build);
};

function App() {
  const [, setTriggerRerender] = useState(false);

  const x = useXXXXX();
  console.log(x);

  const rerenderButton = {
    position: 'absolute',
    right: 20,
    top: 20,
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const marginTop = {
    marginTop: 30,
  };

  return (
    <div style={containerStyle}>
      <button
        style={rerenderButton}
        onClick={() => setTriggerRerender((value) => !value)}
      >
        rerender component
      </button>
      <h1>Netlify Deploy Playground</h1>
      <button onClick={deployViaBuildHook}>Deploy Site With Build Hook</button>
      <img
        style={marginTop}
        src={
          'https://api.netlify.com/api/v1/badges/cf3b4320-664f-45d5-ba30-fd1e17803b87/deploy-status'
        }
        alt=""
      />
      <button style={marginTop} onClick={listSites}>
        List Sites
      </button>
      <button style={marginTop} onClick={listSiteBuilds}>
        List Site Builds
      </button>
      <button style={marginTop} onClick={getSpecificBuild}>
        Get Specific Build
      </button>
      <button style={marginTop} onClick={getSpecificDeploy}>
        Get Specific Deploy
      </button>
      <button style={marginTop} onClick={createSiteBuild}>
        Create Site Build Via Api
      </button>
    </div>
  );
}

export default App;

/* NOTES
  - img doesn't update without refresh of page. Rerendering componet has no effect
  
  USING NETLIFY API
  - build, through its 'done' prop, shows build status
  - deploy, through its 'state' prop, also shows build status
  - can create site build (does same thing as build hook) and get deployId and buildId in response
*/
