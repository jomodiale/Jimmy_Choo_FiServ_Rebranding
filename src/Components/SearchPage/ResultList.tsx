import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import Grid from "@mui/material/Grid";
import {
  buildResultList,
  Result,
  buildResultTemplatesManager,
  ResultTemplatesManager,
  ResultList as HeadlessResultList,
} from "@coveo/headless";
import EngineContext from "../../common/engineContext";
import {
  FieldToIncludesInSearchResults,
  ResultTemplateConfig,
} from "../../config/SearchConfig";
import Skeleton from "react-loading-skeleton";
import styled from 'styled-components'
import "react-loading-skeleton/dist/skeleton.css";

type Template = (result: Result) => React.ReactNode;

export function filterProtocol(uri: string) {
  // Filters out dangerous URIs that can create XSS attacks such as `javascript:`.
  const isAbsolute = /^(https?|ftp|file|mailto|tel):/i.test(uri);
  const isRelative = /^(\/|\.\/|\.\.\/)/.test(uri);

  return isAbsolute || isRelative ? uri : "";
}

interface ResultListRendererProps {
  controller: HeadlessResultList;
  setResultLoading: (x: boolean) => void;
}

const ResultListRenderer: FunctionComponent<ResultListRendererProps> = (
  props
) => {
  const { controller, setResultLoading } = props;
  const engine = useContext(EngineContext)!;
  const [state, setState] = useState(controller.state);
  const headlessResultTemplateManager: ResultTemplatesManager<Template> =
    buildResultTemplatesManager(engine);
  headlessResultTemplateManager.registerTemplates(...ResultTemplateConfig);
  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  useEffect(() => {
    if (state.isLoading) {
      setResultLoading(true);
    } else {
      setResultLoading(false);
    }
  }, [state]);


  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 3, sm: 3, md: 4 }}>
      {state.results.length === 0 && (state.isLoading || !state.firstSearchExecuted) ? (
        <ResultListSkeleton />
      ) : (
        <>
          {state.results.map((result: Result) => {
            const template =
              headlessResultTemplateManager.selectTemplate(result);
            return (
              <React.Fragment key={result.uniqueId}>
                 <Grid item xs={4}>
                <Item>
                {" "}
                {template ? template(result) : null}{" "}
                </Item>
                </Grid>
              </React.Fragment>
            );
          })}
         
        </>
      )}
    </Grid>
  );
};

const Item = styled.div`

`

interface ResultListProps {
  setResultLoading: (x: boolean) => void;
}

const ResultList: FunctionComponent<ResultListProps> = ({
  setResultLoading,
}) => {
  const engine = useContext(EngineContext)!;
  const controller = buildResultList(engine, {
    options: { fieldsToInclude: FieldToIncludesInSearchResults },
  });
  return (
    <ResultListRenderer
      controller={controller}
      setResultLoading={setResultLoading}
    />
  );
};

export const ResultListSkeleton: FunctionComponent = () => {
  return (
    <>
      <div style={{ padding: "30px 20px" }}>
        <Skeleton count={1} style={{ marginBottom: "20px", height: "40px" }} />
        <Skeleton count={2} style={{ margin: "10px 0px" }} />
      </div>
      <div style={{ padding: "30px 20px" }}>
        <Skeleton count={1} style={{ marginBottom: "20px", height: "40px" }} />
        <Skeleton count={2} style={{ margin: "10px 0px" }} />
      </div>
      <div style={{ padding: "30px 20px" }}>
        <Skeleton count={1} style={{ marginBottom: "20px", height: "40px" }} />
        <Skeleton count={2} style={{ margin: "10px 0px" }} />
      </div>
    </>
  );
};

export default ResultList;

