export const Flex = {
    flex: { flex: 1 },
    row: { flexDirection: 'row' },
    column: { flexDirection: 'column' },
    center: { justifyContent: 'center', alignItems: 'center' },
    justifyCenter: { justifyContent: 'center' },
    alignCenter: { alignItems: 'center' },
    rowCenter: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    rowSpaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
    rowSpaceBetweenCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowLeft: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    rowRight: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
    rowBottomCenter: { flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' },
    rowBottomLeft: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' },
    rowBottomRight: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' },
    columnCenter: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
};
