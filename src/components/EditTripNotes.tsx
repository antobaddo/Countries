import TextArea, {TextAreaRef} from "antd/lib/input/TextArea";
import {Space} from "antd";
import {useRef, useState} from "react";
import {usePatchCountryTripMutation} from "../redux/api";
import {EditOutlined, SaveTwoTone} from '@ant-design/icons';

export default function EditTripNotes({countryId, text}: {
    countryId?: string, text?: string
}) {

    const ref = useRef<TextAreaRef>(null)
    const [update, {isLoading: isUpdating}] = usePatchCountryTripMutation()
    const [isEditing, setIsEditing] = useState(false)

    return <>
        {!isEditing && <Space align={'center'}>
            <EditOutlined
                style={{fontSize: 20}}
                onClick={() => setIsEditing(true)}
            />
            {text}
        </Space>}
        {isEditing && <div>
            <SaveTwoTone
                style={{fontSize: 20}}
                disabled={isUpdating}
                onClick={() => {
                    if (ref.current?.resizableTextArea && countryId) {
                        update({country_id: countryId, trip_notes: ref.current.resizableTextArea.textArea.value ?? ""})
                            .finally(() => setIsEditing(false))
                    }
                }}/>
            <TextArea
                rows={5}
                ref={ref}
                defaultValue={text}
                disabled={isUpdating}
            />
        </div>
        }
    </>
}