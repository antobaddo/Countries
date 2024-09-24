import {Switch, SwitchProps} from "antd";
import {usePatchCountryTripMutation} from "../redux/api";

export default function SwitchVisitCountry({countryId, switchProps} : {countryId: string, switchProps?: SwitchProps}) {

    const [update, {isLoading: isUpdating}] = usePatchCountryTripMutation()

    return <Switch
        loading={isUpdating}
        onChange={(checked, event) => {
            update({country_id: countryId, is_visited: checked})
        }}
        checkedChildren={'Yes'}
        unCheckedChildren={'No'}
        {...switchProps}
    />
}