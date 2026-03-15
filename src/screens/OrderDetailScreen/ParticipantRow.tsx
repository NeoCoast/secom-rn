import { View, Text } from "react-native";

import type { IndividualOrder } from "@src/types";
import { common } from "@src/theme";
import { cx } from "@src/utils/styles";
import { formatCurrency } from "@src/utils/format";

import { styles } from "./styles";

interface ParticipantRowProps {
  individualOrder: IndividualOrder;
}

export const ParticipantRow = ({ individualOrder }: ParticipantRowProps) => {
  const tags = [
    ...individualOrder.selectedToppingNames,
    ...individualOrder.selectedExtraNames,
  ];

  return (
    <View style={cx(common.row, styles.participantRow)}>
      <View style={styles.participantAvatar}>
        <Text style={styles.participantAvatarText}>
          {individualOrder.userName[0].toUpperCase()}
        </Text>
      </View>
      <View style={styles.participantInfo}>
        <Text style={styles.participantName}>{individualOrder.userName}</Text>
        <Text style={styles.participantItem}>{individualOrder.menuItemName}</Text>
        {tags.length > 0 && (
          <View style={styles.tagsRow}>
            {tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <Text style={styles.participantTotal}>
        {formatCurrency(individualOrder.total)}
      </Text>
    </View>
  );
};
