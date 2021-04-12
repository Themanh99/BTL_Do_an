import React from 'react';

function Searchs(props) {
    return (
        <div>
            <div className="top-search">
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search" /></span>
                        <input type="text" className="form-control" placeholder="Tìm kiếm" />
                        <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchs;