import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { ChartDiv } from './styles';

function HierarchyChart() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Define data
    var data = {
        value: 0,
        children: [
          {
            name: "Stack",
            children: [
              {
                name: "MEAN",
                value: 3
              },
              {
                name: "MERN",
                value: 3
              },
              {
                name: "React-Springboot",
                value: 6
              }
            ]
          },
          {
            name: "Frontend",
            children: [
              {
                name: "Javascript",
                children: [
                  {
                    name: "React",
                    children: [
                      {
                        name: "React.js",
                        value: 1
                      },
                      {
                        name: "React-Native",
                        value: 4
                      },
                      {
                        name: "Redux",
                        value: 1
                      },
                      {
                        name: "Saga",
                        value: 1
                      },
                      {
                        name: "React-Testing-Library",
                        value: 1
                      }
                    ]
                  },
                  {
                    name: "Angular",
                    value: 2
                  },
                  {
                    name: "Vue",
                    value: 1
                  },
                  {
                    name: "Next",
                    value: 1
                  }
                ]
              },
              {
                name: "HTML",
                value: 1,
              },
              {
                name: "CSS",
                children: [
                  {
                    name: "Styled Components",
                    value: 1
                  },
                  {
                    name: "Bootstrap",
                    value: 1
                  },
                  {
                    name: "SCSS",
                    value: 1
                  }
                ]
              }
            ]
          },
          {
            name: "Backend",
            children: [
              {
                name: "Spring boot",
                value: 6
              },
              {
                name: "Node",
                value: 3
              },
              {
                name: "Django",
                value: 3
              }
            ]
          },
          {
            name: "Programming",
            children: [
              {
                name: "Java",
                value: 2
              },
              {
                name: "JavaScript",
                value: 2
              },
              {
                name: "TypeScript",
                value: 1
              },
              {
                name: "Python",
                value: 1
              },
              {
                name: "C",
                value: 1
              }
            ]
          },
          {
            name: "UI/UX",
            children: [
              {
                name: "Photoshop",
                value: 1
              },
              {
                name: "Illustrator",
                value: 1
              },
              {
                name: "Figma",
                value: 1
              }
            ]
          },
          {
            name: "Database",
            children: [
              {
                name: "MongoDB",
                value: 1
              },
              {
                name: "MySQL",
                value: 1
              },
              {
                name: "Postgres",
                value: 1
              }
            ]
          },
          {
            name: "Version Control",
            children: [
              {
                name: "Git",
                value: 1
              },
              {
                name: "Github",
                value: 1
              },
              {
                name: "Bitbucket",
                value: 1
              }
            ]
          },
          {
            name: "Cloud",
            children: [
              {
                name: "AWS",
                value: 1
              },
              {
                name: "Azure",
                value: 1
              },
              {
                name: "Google Cloud",
                value: 1
              }
            ]
          },
          {
            name: "Other",
            children: [
              {
                name: "Data Structures",
                value: 1
              },
              {
                name: "Algorithms",
                value: 1
              },
              {
                name: "OOPS",
                value: 1
              },
              {
                name: "Agile",
                value: 1
              },
              {
                name: "Accessibility",
                value: 1
              },
              {
                name: "Webpack",
                value: 1
              }
            ]
          },
        ]
      };

    
      var zoomableContainer = root.container.children.push(
        am5.ZoomableContainer.new(root, {
          width: am5.p100,
          height: am5.p100,
          wheelable: true,
          pinchZoom: true
        })
      );
      
      zoomableContainer.children.push(am5.ZoomTools.new(root, {
        target: zoomableContainer
      }));
      
      // Create series
      // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
      var series = zoomableContainer.contents.children.push(am5hierarchy.ForceDirected.new(root, {
        maskContent:false, //!important with zoomable containers
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 3,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 0.8
      }));
      
      
      series.get("colors").setAll({
        step: 2
      });
      
      series.links.template.set("strength", 0.5);
      series.labels.template.set("minScale", 0);
      
      series.data.setAll([data]);
      
      series.set("selectedDataItem", series.dataItems[0]);
      
      
      // Make stuff animate on load
      series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <ChartDiv id="chartdiv"></ChartDiv>
  );
}
export default HierarchyChart;