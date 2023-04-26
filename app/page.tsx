import {
  BeakerIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Bitsy</h1>

      {/*encapsulating all there boxes */}
      <div className="flex text-center space-x-2">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/*icon */}
              <BeakerIcon className="h-8 w-8" />
              <h2>Examples</h2>
            </div>

            {/* info of 1st container */}
            <div className="space-y-2">
              <p className="infoText">"Explain Something to me"</p>
              <p className="infoText">"State differences in India and China"</p>
              <p className="infoText">"what came first egg or chicken"</p>
            </div>
          </div>
        </div>

        {/*2nd column */}
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/*icon */}
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilites</h2>
            </div>

            {/* info of 1st container */}
            <div className="space-y-2">
              <p className="infoText">"Numerous Model's to Choose From"</p>
              <p className="infoText">"Store Your Prompts on Firebase"</p>
              <p className="infoText">"ChatGptAPI usage"</p>
            </div>
          </div>
        </div>

        {/*3rd column */}
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/*icon */}
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>

            {/* info of 1st container */}
            <div className="space-y-2">
              <p className="infoText">"Cant give Personalized Opinion"</p>
              <p className="infoText">"Cant give Current News Updates"</p>
              <p className="infoText">"API limitation"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
