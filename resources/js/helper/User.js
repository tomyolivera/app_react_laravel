import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @param {number} status 
 */
export function FormatStatus(status){
    return (
        <div className="d-flex">
            <span className="align-self-center">
                <FontAwesomeIcon icon={faCircle}
                    color={
                                status === 0
                                ? 'gray'
                                : status === 1
                                    ? 'green'
                                    : status === 2 && 'orange'
                            }
                />
            </span>

            <span className="mx-1">
                {
                    status === 0
                    ? 'Offline'
                    : status === 1
                        ? 'Online'
                        : status === 2 && 'Busy'
                }
            </span>
        </div>
    )
}