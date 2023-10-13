const Setting = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10 text-center">Setting</h1>
      <div className="flex justify-center">
        <div className="flex-col items-center">
          {/* button for setting */}
          <div>
          <a href="/settings/user-account">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              User Account
            </button>
          </a>
        </div>

        <div >
          <a href="/settings/security-setting">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              Security Setting
            </button>
          </a>
        </div>

        {/* <div>
          <a href="/settings/theme-change">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              Theme Change
            </button>
          </a>
        </div> */}

        <div >
          <a href="/settings/help-support">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              Help & Support
            </button>
          </a>
        </div>

        <div>
          <a href="/settings/log-out">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10 w-60">
              Log Out
            </button>
          </a>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Setting;


