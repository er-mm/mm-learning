import React from "react";

export class Details extends React.Component {
    render() {
        const { moreDetails } = this.props;
        return (
            <div>
                {`Year: ${moreDetails.Year},
                  Platform: ${moreDetails.Platform},
                   Genre: ${moreDetails.Genre},
                    Publisher: ${moreDetails.Publisher},
                     Global_Sales: ${moreDetails.Global_Sales}`}
            </div>
        );
    }
}